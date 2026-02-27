import { apiVersion, dataset, projectId } from "lib/sanity.api";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./schemas/schemaTypes";

export const config = defineConfig({
  projectId: projectId || '',
  dataset: dataset || '',
  title: "PeruinJapan",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas
  },
});

export default config;
