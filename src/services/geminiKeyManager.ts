/**
 * GeminiKeyManager handles the rotation of multiple Google Gemini API keys
 * to avoid rate limiting and provide redundancy.
 */

class GeminiKeyManager {
  private keys: string[] = [];
  private currentIndex: number = 0;

  constructor() {
    this.loadKeys();
  }

  /**
   * Loads keys from environment variables.
   * Supports VITE_GEMINI_API_KEYS (comma-separated) and VITE_GEMINI_API_KEY.
   */
  private loadKeys() {
    const multiKeys = import.meta.env.VITE_GEMINI_API_KEYS || "";
    const singleKey = import.meta.env.VITE_GEMINI_API_KEY || "";

    const keysList = multiKeys
      .split(",")
      .map((k: string) => k.trim())
      .filter((k: string) => k.length > 0);

    if (singleKey && !keysList.includes(singleKey)) {
      keysList.unshift(singleKey);
    }

    // Remove duplicates and limit to 7 keys if necessary (though the user said "up to 7", we can support more if provided)
    this.keys = Array.from(new Set(keysList));
    
    if (this.keys.length > 0) {
      console.log(`GeminiKeyManager: Loaded ${this.keys.length} API keys for rotation.`);
    } else {
      console.warn("GeminiKeyManager: No API keys found in VITE_GEMINI_API_KEY or VITE_GEMINI_API_KEYS.");
    }
  }

  /**
   * Returns the next API key in the rotation (round-robin).
   */
  public getNextKey(): string {
    if (this.keys.length === 0) return "";
    
    const key = this.keys[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.keys.length;
    return key;
  }

  /**
   * Returns all available keys.
   */
  public getAllKeys(): string[] {
    return [...this.keys];
  }

  /**
   * Returns true if at least one key is available.
   */
  public hasKeys(): boolean {
    return this.keys.length > 0;
  }
}

export const geminiKeyManager = new GeminiKeyManager();
