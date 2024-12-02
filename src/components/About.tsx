import sad from "../assets/Health/Sad.jpg";
import alley from "../assets/Health/Dark Alley.jpg";
import Yoga from "../assets/Health/Yoga.jpg";
import Hiking from "../assets/Health/Hiking.jpg";
import Button from "./Button";

const About = () => {
  return (
    <>
      <div className="tracking-wide leading-relaxed text-text-light">
        <p>
          Clarity is a beacon of hope for those navigating the complexities of
          mental health.
        </p>
        <p>
          We're committed to fostering a world where mental wellness is
          prioritized and accessible to all.
        </p>
      </div>

      <div className="my-8 h-0.5 bg-secondary-dark dark:bg-secondary-dark opacity-30 mx-auto w-3/4"></div>

      <h1 className="text-2xl md:text-4xl mb-4 font-semibold text-text-light">
        Our Mission
      </h1>
      <p className="text-left tracking-wide text-text-light">
        At Clarity, we believe that everyone deserves access to quality mental
        health support.
        <br />
        Our mission is to:
        <br />
        <ul className="list-disc list-inside">
          <li>
            <em className="font-semibold text-teal-600">
              Destigmatize Mental Illness:
            </em>{" "}
            Challenge societal stigma and promote open conversations about
            mental health.
          </li>
          <li>
            <em className="font-semibold text-teal-600">
              Provide Accessible Resources:
            </em>{" "}
            Offer a range of resources, including therapy, counseling, and
            support groups.
          </li>
          <li>
            <em className="font-semibold text-teal-600">Fund Research:</em>{" "}
            Support innovative research to advance mental health treatments and
            prevention.
          </li>
        </ul>
      </p>

      <div className="my-8 h-0.5 bg-secondary-dark dark:bg-secondary-dark opacity-30 mx-auto w-3/4"></div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 py-4">
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

      <div className="my-8 h-0.5 bg-secondary-dark dark:bg-secondary-dark opacity-30 mx-auto w-3/4"></div>

      <h2 className="text-2xl md:text-4xl mb-4 font-semibold text-text-light">
        Your Impact Matters{" "}
      </h2>
      <p className="text-text-light mb-8">
        Your generous donation will help us provide{" "}
        <em className="font-semibold text-teal-600">
          affordable therapy sessions
        </em>{" "}
        for beneficiaries, fund{" "}
        <em className="font-semibold text-teal-600">crisis hotlines</em>,
        support{" "}
        <em className="font-semibold text-teal-600">
          research to improve mental health treatments and their effectiveness
        </em>
        , promote <em className="font-semibold text-teal-600">awareness</em>,
        fight <em className="font-semibold text-teal-600">stigmatization</em>{" "}
        and strengthen the{" "}
        <em className="font-semibold text-teal-600">community</em> of people who
        need mental health support as well as those who look after them.
      </p>
      <Button children="Donate Now" omClick={() => {}} styleVariant="default" />
    </>
  );
};

export default About;
