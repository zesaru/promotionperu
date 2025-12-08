import { defineConfig } from "sanity";
import { apiVersion, dataset, projectId } from "lib/sanity.api";
import { deskTool } from "sanity/desk";

import schemas from "./schemas/schemaTypes";

export const config = defineConfig({
  projectId: projectId || '',
  dataset: dataset || '',
  apiVersion,
  title: "PeruinJapan",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas
  },
});
