import hopeful from "../assets/Health/Hopeful.jpg";
// import Button from "./Button";

const DonateHero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hopeful}
          alt="Mental health support"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to improve text readability */}
        <div className="absolute h-full inset-0 dark:bg-black/70 bg-black/40 transition all duration-1000 ease-in-out z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-15 flex flex-col items-center justify-center h-full text-white text-center px-4 py-8">
        <h1 className="text-2xl md:text-4xl mt-16 md:mt-32 font-bold mb-6">
          With you, we can{" "}
          <em className="italic underline text-teal-300 decoration-wavy decoration-2 underline-offset-4">
            illuminate
          </em>{" "}
          the way.
        </h1>
        <p className="max-w-2xl text-sm md:text-xl">
          Every donation, no matter the size, brings us closer to a brighter
          future. You're making a difference.
        </p>
      </div>
      {/* <Button children={"Donate"} omClick={() => {}} /> */}
    </div>
  );
};

export default DonateHero;
