import React from "react";
import getAllPosts from "../../services/posts/getAllPosts";
import getPostBySlug from "../../services/posts/getPostBySlug";

export default function PostDetails({post}) {
  return (
    <article>
      <h1 className="text-black font-bold">{post.title}</h1>
    </article>
  );
}

export async function getStaticProps({ params }) {
  return getPostBySlug(params.slug).then((post) => {
    return {
      props: {
        post: post[0],
      },
    };
  });
}

export async function getStaticPaths() {
  return getAllPosts().then((posts) => {
    const paths = posts.map((post) => {
      return {
        params: { slug: post.slug.current },
      };
    });
    return { paths, fallback: false };
  });
}
