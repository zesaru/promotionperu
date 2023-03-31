import { withDocumentI18nPlugin } from "@sanity/document-internationalization";
import { apiVersion, dataset, projectId } from "lib/sanity.api";
import { deskTool } from "sanity/desk";
import cityType from "schemas/city";
import menuType from "schemas/menu";
import postType from "schemas/post";
import restaurantType from "schemas/restaurant";

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
    types: [cityType, restaurantType, menuType, postType],
  },
};
