import * as contentful from "contentful";

const client = contentful.createClient({
  accessToken: import.meta.env.VITE_CONTENTFULAPIKEYS || "",
  space: import.meta.env.VITE_CONTENTFULSPACEID || "",
});

function getArticles(slug) {
  const cl = client
    .getEntries({
      content_type: "articoli",
      "fields.slug": slug,
    })
    .catch((err) => {
      throw err;
    });
  return cl;
}
function getHome() {
  return client.getEntry(import.meta.env.VITE_IDHOME);
}
function getFooter() {
  return client.getEntry(import.meta.env.VITE_IDFOOTER);
}
function getAbout() {
  return client.getEntry(import.meta.env.VITE_IDABOUT);
}
function getDonaOra() {
  return client.getEntry(import.meta.env.VITE_IDDONAORA);
}

export { getHome, getFooter, getArticles, getAbout, getDonaOra };
