import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "ai",
        label: "Ai Gallery",
        path: "content/ai",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description (Optional)",
            required: false,
          },
          {
            type: "image",
            name: "photos",
            label: "Photos (Select 1 or more images)",
            list: true,
            required: true,
          },
        ],
      },
      {
        name: "photography",
        label: "Photography Gallery",
        path: "content/photography",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description (Optional)",
            required: false,
          },
          {
            type: "image",
            name: "photos",
            label: "Photos (Select 1 or more images)",
            list: true,
            required: true,
          },
        ],
      },
    ],
  },
});
