export default async function getPostBySlug(slug) {
  return await fetch(`http://localhost:5001/api/v1/article-by-slug/${slug}`);
}
