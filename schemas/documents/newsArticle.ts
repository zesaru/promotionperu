import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "newsArticle",
  title: "News Article",
  type: "document",
  fields: [
    defineField({
      name: "titleEs",
      title: "Title (Spanish)",
      type: "string",
      validation: (rule) => rule.required(),
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
        source: "titleEs",
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
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
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
      of: [defineArrayMember({ type: "block" })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bodyJp",
      title: "Body (Japanese)",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
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
      title: "titleEs",
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
