import Button from "./Button";
import { ConnectKitButton } from "connectkit";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { abi } from "../abis/abi.json";
import { useEffect, useState } from "react";
import { parseEther } from "viem";

const CONTRACT_ADDRESS = "0xb2D4304b98a29B358e5BBe33C995486249962D58";

const DonateBody = () => {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { writeContract, data: hash } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  // useEffect(() => {
  //   if (isConfirmed) {
  //     setIsLoading(false);
  //     setAmount("");
  //     console.log("Transaction confirmed");
  //   }
  // }, [isConfirmed]);

  // useEffect(() => {
  //   if (isConfirmed) {
  //     setIsLoading(false); // Reset isLoading when the transaction is confirmed
  //     setAmount(""); // Clear the input field
  //     console.log("Transaction confirmed");
  //   }
  // }, [isConfirmed]);

  const handleDonate = async () => {
    try {
      setIsLoading(true);

      const value = parseEther(amount);

      const tx = await writeContract({
        address: CONTRACT_ADDRESS,
        abi,
        functionName: "fund",
        value,
      });

      console.log("Transaction sent:", tx);

      // Optionally, wait for the transaction to confirm if supported
      const receipt = await hash;
      console.log("Transaction successful:", receipt);
    } catch (error) {
      console.error("Error donating:", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  useEffect(() => {
    if (isConfirmed) {
      setIsLoading(false); // Reset loading state
      setAmount(""); // Clear the input field
      console.log("Transaction confirmed with hash:", hash);
    }
  }, [isConfirmed, hash]);

  return (
    <div className="">
      <div className=" h-full text-text-light dark:text-text-dark text-center text-lg md:text-xl py-8 px-4 bg-background-light dark:bg-background-dark transition-colors duration-1000 ease-in-out">
        <h2 className="text-2xl md:text-4xl mb-4 font-semibold">
          Every Contribution Matters
        </h2>
        <p>Mental health isn't a luxury—it's a fundamental human right.</p>
        <br />

        <div className="my-2 md:my-4 h-0.5 bg-secondary-dark dark:bg-secondary-light opacity-30 mx-auto w-3/4"></div>

        <h2 className="text-xl md:text-2xl mb-2 md:mb-4 font-semibold">
          How to contribute
        </h2>
        <ul className="list-disc list-inside  ">
          <li>
            <em className="text-teal-600">Step 1:</em> Connect your Wallet
            <ul className="text-base pl-8">
              <li>We recommend using a separate account for this</li>
            </ul>
          </li>
          <li>
            <em className="text-teal-600">Step 2:</em> Enter your donation
            amount. Sepolia ETH
          </li>
          <li>
            <em className="text-teal-600 ">Step 3:</em> Confirm the transaction
            <ul className="text-base pl-8">
              <li>
                {/* <em className="text-teal-400">Optional:</em> */}
                You can choose to also see the transaction on Etherscan
              </li>
              <li>
                {/* <em className="text-teal-400">Optional:</em> */}
                You can check the total balance of the contract using the See
                Balance button.
              </li>
            </ul>
          </li>

          <div className="my-2 md:my-4 h-0.5 bg-secondary-dark dark:bg-secondary-light opacity-30 mx-auto w-3/4"></div>

          <p className="mt-2 text-base">
            We are transparent with all donations received hence the reason why
            all donations are made in Crypto (Sepolia ETH).
          </p>
        </ul>

        <section className="flex flex-col gap-4 justify-center items-center py-4">
          <ConnectKitButton.Custom>
            {({ isConnected, show, truncatedAddress }) => {
              return (
                <Button onClick={show}>
                  {isConnected ? truncatedAddress : "Connect Wallet"}
                </Button>
              );
            }}
          </ConnectKitButton.Custom>
          {/* <Button onClick={() => {}}>Connect Wallet</Button> */}
          <label
            // for="ethAmount"
            className="items-center justify-center"
          >
            ETH Amount
          </label>

          <div className="flex my-4 gap-1 ">
            <input
              id="ethAmount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              placeholder="0.1"
              className="bg-transparent border-2 border-teal-600 w-48 h-9 p-3 focus:border-teal-600 placeholder-text-light placeholder-opacity-50 dark:placeholder-text-dark/60 rounded-md"
            />
            <Button
              className="bg-teal-600 hover:bg-teal-700 w-32 h-9 px-2 py-0 text-white flex items-center justify-center"
              onClick={handleDonate}
              disabled={!amount || isLoading || isConfirming}
            >
              {isLoading || isConfirming ? "Processing..." : "Donate"}
            </Button>
          </div>

          {isConfirmed && (
            <p className="text-green-500">
              Thank you for your donation! Transaction confirmed.
            </p>
          )}

          <Button onClick={() => {}}>See Balance</Button>
        </section>

        {/* <p>
          Please note that all transactions are routed to you wallet and we do
          not have access to your private keys. Feel free to use a different
          wallet if you wish
        </p> */}
        {/* <p>- Break the silence surrounding mental health</p>{" "}
        <p>- Access professional counseling services</p>
        <p>- Support community mental wellness programs</p>
        <p>- Provide resources for those struggling in silence</p> */}
      </div>
    </div>
  );
};

export default DonateBody;
