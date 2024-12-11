import React from "react";
import DonateHero from "../components/DonateHero";
import DonateBody from "../components/DonateBody";

const DonatePage: React.FC = () => {
  return (
    <div className="min-h-screen ">
      <DonateHero />
      <DonateBody />
    </div>
  );
};

export default DonatePage;
