import { defineType } from "sanity";

export default defineType({
  type: "document",
  i18n: true,
  name: "menu",
  title: "Menu",
  fields: [
    {
      name: "menu",
      title: "Menu",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "menu",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
  ],
});
