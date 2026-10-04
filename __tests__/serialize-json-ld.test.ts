import { serializeJsonLd } from "@/lib/serialize-json-ld";

describe("JSON-LD serialization", () => {
  it("keeps malicious content inside the script while preserving the JSON data", () => {
    const payload = {
      "@context": "https://schema.org",
      "@type": "Recipe",
      name: '</script><img src=x onerror="alert(1)"><script>alert(1)</script>',
      description: "日本語 & Español <3",
      nested: { text: "</ScRiPt><!--" },
    };
    const container = document.createElement("div");
    container.innerHTML = `<script type="application/ld+json">${serializeJsonLd(payload)}</script>`;

    expect(container.children).toHaveLength(1);
    expect(container.querySelector("img")).toBeNull();
    expect(JSON.parse(container.firstElementChild!.textContent!)).toEqual(payload);
  });
});
