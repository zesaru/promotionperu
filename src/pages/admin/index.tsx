import { NextStudio } from "next-sanity/studio";
import { NextSeo } from "next-seo";
import React from "react";

import config from "../../../sanity.config";

export default function StudioPage() {
  return (
    <>
      <NextSeo
        title="Admin Studio"
        noindex
        nofollow
        additionalMetaTags={[
          {
            name: "robots",
            content: "noindex, nofollow, noarchive, nosnippet",
          },
        ]}
      />
      <NextStudio config={config} />
    </>
  );
}
