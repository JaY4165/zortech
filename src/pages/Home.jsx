import HeroSection from "../components/HeroSection";
import InfiniteScrollCompanies from "../components/InfiniteScrollCompanies";
import TextRevealByWord from "../components/TextRevealAnimation";

const Home = () => {
  return (
    <div className="px-20">
      <HeroSection />
      <InfiniteScrollCompanies />
      <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg w-full bg-white dark:bg-black">
        <h1 className="text-5xl font-bold sticky top-10 text-carrot-orange-300">
          Our Difference
        </h1>
        <TextRevealByWord text="At ZorTech, our recruitment process is finely tuned for precision and efficiency, ensuring the swift and effective connection of skilled talent with exceptional companies. With our vast network of top-tier professionals and well-established industry relationships, we consistently excel in finding the ideal fit." />
      </div>
    </div>
  );
};

export default Home;
