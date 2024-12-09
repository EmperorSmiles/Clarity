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
          className="w-full h-4/5 object-cover"
        />
        {/* Dark overlay to improve text readability */}
        <div className="absolute h-4/5 inset-0 bg-black opacity-50 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-15 flex flex-col items-center justify-center h-4/5 text-white text-center px-4 py-8">
        <h1 className="text-3xl md:text-4xl mt-8 font-bold mb-6">
          With you, we can illuminate the way.
        </h1>
        <p className="max-w-2xl text-lg md:text-xl">
          Every donation, no matter the size, brings us closer to a brighter
          future. Your support empowers us to:
        </p>
      </div>
      {/* <Button children={"Donate"} omClick={() => {}} /> */}
    </div>
  );
};

export default DonateHero;
