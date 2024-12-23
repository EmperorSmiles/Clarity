import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

type Media = {
  type: "image" | "video";
  url: string;
};

interface HeroProps {
  mediaItems: Media[];
  videoFallbackImage: string;
  interval?: number;
}

const Hero: React.FC<HeroProps> = ({
  mediaItems,
  videoFallbackImage,
  interval = 7000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
        setIsTransitioning(false);
      }, 1000);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, mediaItems.length]);

  // Pause all videos except the current one
  useEffect(() => {
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        if (index === currentIndex && mediaItems[index].type === "video") {
          videoRef.currentTime = 0;
          const playPromise = videoRef.play();

          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              // Only log if it's not an AbortError
              if (error.name !== "AbortError") {
                console.log("Video play error:", error);
              }
            });
          }
        } else {
          videoRef.pause();
        }
      }
    });
  }, [currentIndex, mediaItems]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Media Background */}
      {mediaItems.map((media, index) => (
        <div
          key={media.url}
          className={`absolute inset-0 w-full transition-opacity duration-1000 ${
            index === currentIndex && !isTransitioning
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          {media.type === "video" ? (
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              playsInline
              muted
              className="w-full h-full object-cover"
              poster={videoFallbackImage}
            >
              <source src={media.url} type="video/mp4" />
              <img
                src={videoFallbackImage}
                alt="Mental health support"
                className="w-full h-full object-cover"
              />
            </video>
          ) : (
            <img
              src={media.url}
              alt="Mental health support"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      ))}

      {/* Black Transition Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Regular Overlay */}
      <div className="absolute inset-0 dark:bg-black/80 bg-black/40 transition all duration-1000 ease-in-out " />

      {/* Content Container */}
      <div className="relative h-full flex items-end pt-16">
        <div className="w-full mx-auto px-8 mb-8">
          <div className="max-w-2xl text-text-dark">
            <h1 className="text-2xl md:text-5xl  mb-2 md:mb-6 capitalize font-semibold">
              Illuminating minds, hope for tomorrow
            </h1>
            <p className="text-sm md:text-xl mb-4 md:mb-8 text-white">
              Together, we can break the silence and stigma around{" "}
              <em className="italic underline text-teal-300 decoration-wavy decoration-2 underline-offset-4 ">
                Mental Health.
              </em>
            </p>
            <Button
              children="Get Started"
              onClick={() => navigate("/donate")}
              styleVariant="default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
