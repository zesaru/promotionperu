import { defineType } from "sanity";
import  CityType  from './city';

export default defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
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
    {
      name: 'city',
      title: 'City',
      type: 'reference',
      to: [{ type: CityType.name }],
    }
  ],
});
