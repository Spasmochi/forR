import Prismic from "prismic-javascript";

const REPO = "funpages";

export const URL = `https://${REPO}.cdn.prismic.io/api/v2`;
export const TOKEN = process.env.API_TOKEN;

export const Client = Prismic.client(URL, { TOKEN });
