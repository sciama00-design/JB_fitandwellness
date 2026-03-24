import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.VITE_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(API_KEY);

async function testModels() {
  const models = [
    "gemini-3-flash",
    "gemini-3.1-flash-lite",
    "gemini-2.5-flash-lite",
    "gemini-2.5-flash",
    "gemini-2.5-flash-tts",
    "gemma-3-1b",
    "gemma-3-4b",
    "gemma-3-12b",
    "gemma-3-27b",
    "gemma-3-2b",
    "gemini-2.5-flash-native-audio-dialog",
    "gemini-robotics-er-1.5-preview"
  ];
  
  console.log("Testing usable models from list...");
  
  for (const modelName of models) {
    console.log(`\n--- Testing ${modelName} ---`);
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Hello");
      console.log(`SUCCESS: ${modelName} works! Response: ${result.response.text().substring(0, 50)}...`);
    } catch (error) {
      console.error(`FAILURE: ${modelName} -> ${error.message}`);
    }
  }
}

testModels();
