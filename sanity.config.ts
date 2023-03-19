import { deskTool } from 'sanity/desk';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_DATASET;
const apiVersion = process.env.API_VERSION;

export const config = {
    projectId,
    dataset,
    apiVersion,
    title: 'PeruinJapan',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: {
        types: [
          {
                name: 'cities',
                title: 'Cities',
                type: 'document',
                fields: [
                  {
                    name: 'city',
                    title: 'City',
                    type: 'string',
                  },
                  {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                      hotspot: true,
                    },
                  },
                  {
                    name: 'enabled',
                    title: 'Enabled',
                    type: 'boolean',
                    initialValue: true,
                  },
                ],
              },
        ]
    }
};