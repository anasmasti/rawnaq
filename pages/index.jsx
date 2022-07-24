import Head from "next/head";
import Image from "next/image";
import Card from "../components/shared/Card";
import LandingCard from "../components/shared/LandingCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="mt-4">
        <LandingCard />
        </div>
        <div className="grid grid-cols-3 gap-3 p-3 ">
         {
          [1,2,3].map((index)=>(
            <Card key={index} />
          ))
         }
        </div>
      </section>
    </div>
  );
}
