export function getUserAgent(): string {
  const navigator = navigator || {};
  return navigator.userAgent;
}
