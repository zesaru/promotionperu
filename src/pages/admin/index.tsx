import { NextStudio } from "next-sanity/studio";
import React from "react";

import { config } from "../../../sanity.config";

export default function StudioPage() {
  return (
    <NextStudio
    config={{
      ...config,
      dataset: config.dataset || "default_dataset",
      projectId: config.projectId || "",
    }}
  />
  );
}
