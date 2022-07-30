import sanityClient from "../../utils/config/sanityClient";

export default async function getAllPosts() {
  return await sanityClient
    .fetch(
      `*[_type == "post"] {
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
      body,
      slug {
        current
      }
  }`
    );
}
