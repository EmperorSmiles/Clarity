import legal from "../assets/Health/Legal.jpg";

const Legal = () => {
  return (
    <div className="relative p-6  text-text-dark dark:text-text-dark/80 md:text-center text-lg md:text-xl py-8 px-4 bg-background-light dark:bg-background-dark transition-colors duration-1000 ease-in-out pt-20 md:pt-56">
      <div className="absolute inset-0 z-0">
        <img
          src={legal}
          alt="Legal writing"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/80 transition all duration-1000 ease-in-out z-10"></div>
      </div>
      <div className="relative ">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Disclaimer
        </h1>
        <p className="mb-4 max-w-3xl mx-auto">
          The purpose of this project is solely to demonstrate the use case of
          the
          <strong> FundMe contract</strong> deployed on the Sepolia network.
          This project is for educational and demonstration purposes only and
          does not represent an actual fundraising campaign or non-profit
          organization. This project is not intended to solicit donations or
          funds from users and has been integrated to only use testnet tokens --
          Sepolia ETH.
        </p>
        <p className="mb-4 max-w-3xl mx-auto">
          The <strong>FundMe contract and this website</strong> have been
          deployed by the contract creator,{" "}
          <a
            className="ml-2 underline-offset-4 text-teal-500 hover:underline"
            href={"https://github.com/EmperorSmiles"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Favour Smiles Adejoh
          </a>{" "}
          for the purpose of showcasing its functionality and smart contract
          interactions. Users are encouraged to use this website for
          demonstration purposes only.
        </p>
        <p className="mb-4 max-w-3xl mx-auto">
          For more information about the contract, please{" "}
          <a
            href={`https://sepolia.etherscan.io/address/${
              import.meta.env.VITE_CONTRACT_ADDRESS
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:underline"
          >
            View on Etherscan
          </a>
        </p>
      </div>
    </div>
  );
};

export default Legal;
