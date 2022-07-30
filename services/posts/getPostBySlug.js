import sanityClient from "../../utils/config/sanityClient";

export default async function getPostBySlug(slug) {
  return await sanityClient.fetch(
    `*[_type == "post" && slug.current == "${slug}"] {
    _id,
    title,
    mainImage {
        asset -> {url}
      },
    _createdAt,
    author -> {
        name,
        image
      },
      body
  }`
  );
}
