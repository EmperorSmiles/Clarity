import Hero from "../components/Hero";
import heroVideo1 from "../assets/Health/HeroVideo.mp4";
import heroVideo2 from "../assets/Health/HeroVIdeo2.mp4";
import heroImage1 from "../assets/Health/Hero.jpg";
import heroImage2 from "../assets/Health/Hero2.jpg";
import videoFallback from "../assets/Health/Hero2.jpg";
import About from "../components/About";

const HomePage: React.FC = () => {
  const mediaItems = [
    {
      type: "video" as const,
      url: heroVideo1,
    },
    {
      type: "image" as const,
      url: heroImage1,
    },
    {
      type: "video" as const,
      url: heroVideo2,
    },
    {
      type: "image" as const,
      url: heroImage2,
    },
  ];

  return (
    <div>
      <div className="bg-background-light dark:bg-background-dark">
        <div className="h-screen flex flex-col justify-center items-center">
          <Hero
            mediaItems={mediaItems}
            videoFallbackImage={videoFallback}
            interval={7000}
          />
        </div>
        <section className="h-full relative font-vietnam bg-background-light dark:bg-background-dark transition-all duration-1000 ease-in-out">
          <div className="flex flex-col items-center justify-center h-full mt- text-text-light text-lg md:text-2xl text-center pt-8 px-4">
            <About />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
