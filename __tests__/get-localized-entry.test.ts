import { getLocalizedEntry } from "@/lib/get-localized-entry";

type TestItem = {
  __i18n_lang?: string;
  title: string;
};

describe("getLocalizedEntry", () => {
  it("returns the exact locale match when available", () => {
    const items: TestItem[] = [
      { __i18n_lang: "jp", title: "JP title" },
      { __i18n_lang: "en", title: "EN title" },
    ];

    expect(getLocalizedEntry(items, "jp")?.title).toBe("JP title");
  });

  it("falls back to configured fallback locale when locale is missing", () => {
    const items: TestItem[] = [
      { __i18n_lang: "jp", title: "JP title" },
      { __i18n_lang: "en", title: "EN title" },
    ];

    expect(getLocalizedEntry(items, "es", "en")?.title).toBe("EN title");
  });

  it("returns first item when neither locale nor fallback exists", () => {
    const items: TestItem[] = [
      { __i18n_lang: "jp", title: "JP title" },
      { __i18n_lang: "en", title: "EN title" },
    ];

    expect(getLocalizedEntry(items, "es", "fr")?.title).toBe("JP title");
  });

  it("returns undefined for empty arrays", () => {
    expect(getLocalizedEntry<TestItem>([], "jp")).toBeUndefined();
  });
});
