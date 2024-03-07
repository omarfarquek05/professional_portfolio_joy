import { createClient,groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { buildQuery } from './utils';

export const client = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "2wffb5go",
  useCdn: false,
});

export const readClient = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "2wffb5go",
  useCdn: false,
})

export const writeClient = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "2wffb5go",
  useCdn: false,
})

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source).auto('format').fit('max');
}

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...7]->{
          title,
          projecturl,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}

export const getResources = async (params) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: 'resource',
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        downloadLink,
        projecturl,
        "image": poster.asset->url,
        views,
        slug,
        category
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}