import About from "./About";

const Body = () => {
  return (
    <section className="h-full relative font-vietnam ">
      {" "}
      <div className="flex flex-col items-center justify-center h-full mt-8 text-text-light text-lg md:text-2xl text-center px-4">
        <About />
      </div>
    </section>
  );
};

export default Body;
