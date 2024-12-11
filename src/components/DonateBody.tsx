const DonateBody = () => {
  return (
    <div>
      <div className=" h-full text-text-light dark:text-text-dark text-center text-lg md:text-2xl py-8 px-4 bg-background-light dark:bg-background-dark">
        <h2 className="text-2xl md:text-4xl mb-4 font-semibold">
          Every Contribution Matters
        </h2>
        <p>
          Mental health isn't a luxury—it's a fundamental human right. Your
          support directly empowers individuals to:
        </p>
        {/* <br /> */}
        <br />
        <p>- Break the silence surrounding mental health</p>{" "}
        <p>- Access professional counseling services</p>
        <p>- Support community mental wellness programs</p>
        <p>- Provide resources for those struggling in silence</p>
      </div>
    </div>
  );
};

export default DonateBody;
