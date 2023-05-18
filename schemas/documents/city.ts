import { defineType } from "sanity";

export default defineType({
  name: "cities",
  title: "Cities",
  type: "document",
  fields: [
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",    
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "enabled",
      title: "Enabled",
      type: "boolean",
      initialValue: true,
    },
  ],
});
