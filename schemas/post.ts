import { defineType } from "sanity";

export default defineType({
  type: "document",
  i18n: true,
  name: "post",
  title: "Post",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: 'array',
      of: [{type: 'block'}]
    },
  ],
});
