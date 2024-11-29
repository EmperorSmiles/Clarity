import sad from "../assets/Health/Sad.jpg";
import alley from "../assets/Health/Dark Alley.jpg";
import Yoga from "../assets/Health/Yoga.jpg";
import Hiking from "../assets/Health/Hiking.jpg";

const About = () => {
  return (
    <>
      <p className="">
        Clarity is a beacon of hope for those navigating the complexities of
        mental health.
      </p>
      <p>
        We're committed to fostering a world where mental wellness is
        prioritized and accessible to all.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 ">
        <img
          src={sad}
          alt="Sad Man"
          className="h-40 w-32 md:h-80 md:w-64 rounded-md"
        />
        <img
          src={Yoga}
          alt="Man in a Yoga Pose"
          className="h-40 w-32 md:h-80 rounded-md  md:w-64"
        />
        <img
          src={alley}
          alt="Man in a dark alley"
          className="h-40 w-32 md:h-80 rounded-md  md:w-64"
        />
        <img
          src={Hiking}
          alt="Lady Hiking"
          className="h-40 w-32 md:h-80 rounded-md md:w-64"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Mission</h1>
    </>
  );
};

export default About;
