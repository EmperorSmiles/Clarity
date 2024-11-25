import hero from "../assets/Health/Hero.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Image Container */}
      <div className="absolute inset-0 w-full">
        <img
          src={hero}
          alt="Mental health support"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-end pt-16">
        <div className="w-full mx-auto px-8">
          <div className="max-w-2xl text-text-dark">
            <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-6">
              Support Mental Health Today
            </h1>
            <p className="text-sm md:text-xl mb-4 md:mb-8">
              Your contribution can make a difference in someone's life. Join us
              in making mental health support accessible to everyone.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-secondary-light px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200 mb-4">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
