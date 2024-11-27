import sad from "../assets/Health/Sad.jpg";
import alley from "../assets/Health/Dark Alley.jpg";

const Body = () => {
  return (
    <section className="h-full relative font-vietnam ">
      {" "}
      {/* <img
        src={sad}
        alt="Sad Man"
        className="h-40 w-40 object-fill absolute top-10 left-4 -rotate-6 rounded-3xl shadow-2xl shadow-black/70"
      />
      <img
        src={alley}
        alt="Man in a dark alley"
        className="h-40 w-40 object-fill absolute top-20 right-3 rotate-6 rounded-xl shadow-2xl shadow-black/70"
      /> */}
      <div className="flex flex-col items-center justify-center h-full mt-8 text-text-light text-lg md:text-2xl text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Mission</h1>
        <p className="">
          Clarity is a beacon of hope for those navigating the complexities of
          mental health.
        </p>
        <p>
          We're committed to fostering a world where mental wellness is
          prioritized and accessible to all.
        </p>
      </div>
    </section>
  );
};

export default Body;
