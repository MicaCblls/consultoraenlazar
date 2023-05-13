export const config = {
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: "production",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};
