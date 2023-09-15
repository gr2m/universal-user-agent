export function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }

  if (typeof process === "object" && "version" in process && process.version !== undefined) {
    return `Node.js/${process.version.substr(1)} (${process.platform}; ${
      process.arch
    })`;
  }

  if (typeof EdgeRuntime === "string") {
    return "Edge Runtime";
  }

  return "<environment undetectable>";
}
