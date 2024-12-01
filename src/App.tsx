import React from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import heroVideo1 from "./assets/Health/HeroVideo.mp4";
import heroVideo2 from "./assets/Health/HeroVideo2.mp4";
import heroImage1 from "./assets/Health/Hero.jpg";
import heroImage2 from "./assets/Health/Hero2.jpg";
import videoFallback from "./assets/Health/Hero2.jpg";
import Body from "./components/Body";

const App: React.FC = () => {
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
    <>
      <NavBar />
      <div className="bg-background-dark h-screen flex flex-col justify-center items-center font-vietnam">
        <Hero
          mediaItems={mediaItems}
          videoFallbackImage={videoFallback}
          interval={7000}
        />
      </div>
      <Body />
    </>
  );
};

export default App;
