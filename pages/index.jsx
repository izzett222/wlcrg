import Hero from "../components/sections/Hero";
import Mission from "../components/sections/Mission";
import Services from "../components/sections/Services";
import Programs from "../components/sections/Programs";
import Footer from "../components/sections/Footer";
import Clients from "../components/sections/Clients";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Mission />
        <Programs />
        <Clients />
        <Footer />
      </main>
    </>
  );
}
