import { defineArrayMember, defineField, defineType } from "sanity";

const newsBody = () => [
  defineArrayMember({ type: "block", marks: { decorators: [
    { title: "Strong", value: "strong" }, { title: "Emphasis", value: "em" },
    { title: "Underline", value: "underline" }, { title: "Strike", value: "strike-through" },
    { title: "Code", value: "code" }, { title: "Superscript", value: "sup" }, { title: "Subscript", value: "sub" },
  ] } }),
  defineArrayMember({
    name: "newsImage", title: "Article image", type: "object",
    fields: [
      defineField({ name: "url", type: "url", title: "Image URL", validation: (rule) => rule.required() }),
      defineField({ name: "alt", type: "string", title: "Alternative text" }),
    ],
  }),
  defineArrayMember({
    name: "newsTable", title: "Table", type: "object",
    fields: [defineField({ name: "rows", type: "array", of: [defineArrayMember({
      name: "newsTableRow", type: "object", fields: [
        defineField({ name: "header", type: "boolean", title: "Header row" }),
        defineField({ name: "cells", type: "array", of: [{ type: "string" }] }),
      ],
    })] })],
  }),
];

export default defineType({
  name: "newsArticle",
  title: "News Article",
  type: "document",
  fields: [
    defineField({ name: "spanishEnabled", title: "Enable Spanish translation", type: "boolean", initialValue: false }),
    defineField({ name: "publicationDate", title: "Original publication date", type: "date" }),
    defineField({ name: "legacyPath", title: "Original URL path", type: "string", readOnly: true,
      validation: (rule) => rule.regex(/^\/investing-in-peru\/20\d{2}\/[a-z0-9-]+$/) }),
    defineField({ name: "category", title: "Category (Japanese)", type: "string" }),
    defineField({ name: "coverImageUrl", title: "Original cover image URL", type: "url" }),
    defineField({
      name: "titleEs",
      title: "Title (Spanish)",
      type: "string",
    }),
    defineField({
      name: "titleJp",
      title: "Title (Japanese)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titleJp",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (rule) => rule.required().integer().min(2020).max(2100),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "coverImageAltEs",
      title: "Cover Image Alt (Spanish)",
      type: "string",
    }),
    defineField({
      name: "coverImageAltJp",
      title: "Cover Image Alt (Japanese)",
      type: "string",
    }),
    defineField({
      name: "excerptEs",
      title: "Excerpt (Spanish)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "excerptJp",
      title: "Excerpt (Japanese)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bodyEs",
      title: "Body (Spanish)",
      type: "array",
      of: newsBody(),
    }),
    defineField({
      name: "bodyJp",
      title: "Body (Japanese)",
      type: "array",
      of: newsBody(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "altEs",
              title: "Alt (Spanish)",
              type: "string",
            }),
            defineField({
              name: "altJp",
              title: "Alt (Japanese)",
              type: "string",
            }),
            defineField({
              name: "captionEs",
              title: "Caption (Spanish)",
              type: "string",
            }),
            defineField({
              name: "captionJp",
              title: "Caption (Japanese)",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "captionEs",
              subtitle: "captionJp",
              media: "image",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "titleJp",
      subtitle: "publishedAt",
      media: "coverImage",
    },
    prepare(selection) {
      const { title, subtitle } = selection;

      return {
        title,
        subtitle: subtitle ? `Published ${subtitle}` : "News article",
      };
    },
  },
});
