import Head from "next/head";
import Card from "../components/shared/Card";
import LandingCard from "../components/shared/LandingCard";
import getAllPosts from "../services/posts/getAllPosts";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Rawnaq</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="mt-4">
          <LandingCard />
        </div>
        <div className="grid grid-cols-3 gap-3 p-3 ">
          {posts.map((post) => (
            <Card
              key={post._id}
              title={post.title}
              image={post.mainImage.asset.url}
              author={post.author}
              publishDate={post._createdAt}
              content={post.body}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return getAllPosts().then((posts) => {
    return {
      props: {
        posts: posts,
      },
    };
  });
}
