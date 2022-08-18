
export default async function getAllPosts() {
  return await fetch('http://localhost:5001/api/v1/articles')
}
