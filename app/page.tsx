import HeroText from "@/components/home-page/HeroText";
import HeroImage from "@/components/home-page/HeroImage";
import TechStack from "../components/home-page/TechStack";

const Home = () => {
  return (
    <main>
      <section className="flex flex-col lg:flex-row items-center justify-around gap-10 md:gap-16 px-6 pt-2 md:pt-18">
        <HeroText />
        <HeroImage />
      </section>
      <section className="py-5 px-20">
        <TechStack />
      </section>
    </main>
  );
};

export default Home;