import { defineType } from "sanity";

export default defineType({
  type: "document",
  name: "recipes",
  title: "Recipes",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "preparation",
      title: "Preparation",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
