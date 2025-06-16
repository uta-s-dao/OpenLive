export const isValidUrl = (url) => {
  try {
    const urlObj = new URL(url);
    // 許可されたドメインのホワイトリスト
    const allowedDomains = [
      "www.google.com",
      "maps.google.com",
      "beatstation.jp",
      "www.instagram.com",
      "www.youtube.com",
    ];

    return allowedDomains.some(
      (domain) =>
        urlObj.hostname === domain || urlObj.hostname.endsWith("." + domain)
    );
  } catch {
    return false;
  }
};
