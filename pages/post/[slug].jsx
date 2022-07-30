import Link from "next/link";
import React from "react";
import getAllPosts from "../../services/posts/getAllPosts";
import getPostBySlug from "../../services/posts/getPostBySlug";
import { IoChevronBackSharp } from "react-icons/io5";

export default function PostDetails({ post }) {
  return (
    <article className="lg:p-20">
    
        <Link href="/">
          <a className="flex items-center font-bold text-gray-400 text-sm mb-5">
            <IoChevronBackSharp /> <span>Retourner à la page d'accueil</span> 
          </a>
        </Link>{" "}
     
      <h1 className="text-black font-bold lg:text-4xl">{post.title}</h1>
      <p className="mt-3 text-sm">
        Publier le :{"  "}
        <span className="text-gray-400">
          {new Date(post._createdAt).toLocaleString()}
        </span>
        &nbsp;&nbsp;&nbsp; Par : {"  "}{" "}
        <span className="text-gray-400">{post.author.name}</span>
      </p>
      <img
        className="rounded-sm h-[350px] w-full object-cover mt-4"
        src={post.mainImage.asset.url}
        alt={post.slug}
      />
      <div className="mt-4">
        {post.body.map((childContent) =>
          childContent.children.map((item) => (
            <p key={item._key} className="text-gray-500">
              {item.text}
            </p>
          ))
        )}
      </div>
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
