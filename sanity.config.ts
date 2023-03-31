import { withDocumentI18nPlugin } from "@sanity/document-internationalization";
import { apiVersion, dataset, projectId } from "lib/sanity.api";
import { deskTool } from "sanity/desk";

import schemas from "./schemas/schemaTypes";


export const config = {
  projectId,
  dataset,
  apiVersion,
  title: "PeruinJapan",
  basePath: "/admin",
  plugins: withDocumentI18nPlugin([deskTool], {
    languages: [{
        "title": "Japones (JP)",
        "id": "jp",
    },{
        "title": "English (EN)",
        "id": "en",
    }

],
  }),
  schema: {
    types: schemas
  },
};
