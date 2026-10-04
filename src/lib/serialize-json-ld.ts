/** Keep structured data from closing its script element in server-rendered HTML. */
export function serializeJsonLd(value: Record<string, unknown>): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
