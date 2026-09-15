import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});
