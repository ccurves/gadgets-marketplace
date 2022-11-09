import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Gadgets Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Hero />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1b1b1b]">
        <div className="space-y-10 py-16">
          <h1
            className="text-center text-4xl font-medium 
        tracking-wide text-white md:text-5xl"
          >
            New Promos
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
