import { sanityApiVersion, sanityProjectId, sanityToken } from "./enviroment";

export const config = {
  dataset: "production",
  projectId: sanityProjectId,
  apiVersion: sanityApiVersion,
  useCdn: "production",
  token: sanityToken,
};
