import Prismic from "prismic-javascript";

const REPO = "funpages";

export const URL = `https://${REPO}.cdn.prismatic.io/api/vw`;
export const TOKEN = process.env.API_TOKEN;

export const Client = Prismic.client(URL, { TOKEN });
