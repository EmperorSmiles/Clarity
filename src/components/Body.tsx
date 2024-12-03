import About from "./About";

const Body = () => {
  return (
    // bg-background-light dark:bg-background-dark
    <section className="h-full relative font-vietnam bg-background-light dark:bg-background-dark transition-all duration-1000 ease-in-out">
      {" "}
      <div className="flex flex-col items-center justify-center h-full mt- text-text-light text-lg md:text-2xl text-center pt-8 px-4">
        <About />
      </div>
    </section>
  );
};

export default Body;
