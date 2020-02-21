export function getUserAgent(): string {
  try {
    return navigator.userAgent;
  } catch (e) {
    return "<environment unknown>"
  }
}
