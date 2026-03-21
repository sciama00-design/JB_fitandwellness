export const parseVideoUrls = (urlStr: string | null | undefined): string[] => {
  if (!urlStr) return [];
  return urlStr.split(',').map(s => s.trim()).filter(Boolean);
};

export const stringifyVideoUrls = (urls: string[]): string | null => {
  const filtered = urls.map(s => s.trim()).filter(Boolean);
  return filtered.length > 0 ? filtered.join(',') : null;
};

export const extractYouTubeId = (url: string): string | null => {
  if (!url) return null;
  // Handle shorts and standard video URLs
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? match[1] : null;
};
