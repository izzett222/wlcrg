import Head from "next/head";
import Hero from "../components/sections/Hero";
import Mission from "../components/sections/Mission";
import Services from "../components/sections/Services";
import Programs from "../components/sections/Programs";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="font-[Roboto]">
        <Hero />
        <Services />
        <Mission />
        <Programs />
        <Footer />
      </main>
    </>
  );
}
