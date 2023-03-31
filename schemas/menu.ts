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
  ],
});
