import Button from "./Button";
import { ConnectKitButton } from "connectkit";
import {
  type BaseError,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { abi } from "../abis/abi.json";
import { useEffect, useState } from "react";
import { parseEther } from "viem";
import axios from "axios";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

const DonateBody = () => {
  const [amount, setAmount] = useState("");
  const [ethPrice, setEthPrice] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [usdValue, setUsdValue] = useState<string | null>(null);
  const { data: hash, isPending, error, writeContract } = useWriteContract();

  const fetchEthPriceInUSD = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      );
      const price = response.data.ethereum.usd;
      setEthPrice(price);
    } catch (error) {
      console.error("Error fetching ETH price", error);
      setErrorMessage("Unable to fetch ETH price.");
    }
  };

  useEffect(() => {
    fetchEthPriceInUSD();
  }, []);

  const validateAmount = (value: string) => {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue) || numericValue <= 0) {
      setErrorMessage("Please enter a valid positive number.");
      return false;
    }
    if (ethPrice && numericValue * ethPrice < 5) {
      setErrorMessage("Minimum donation is $5 worth of ETH.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
    validateAmount(value);

    // Calculate USD value if ETH price is available
    if (ethPrice && value) {
      const ethAmount = parseFloat(value);
      const usdEquivalent = ethAmount * ethPrice;
      setUsdValue(usdEquivalent.toFixed(2)); // Set the USD equivalent value (2 decimals)
    }
  };

  const handleDonate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateAmount(amount)) {
      const ethAmount = parseEther(amount);
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: abi, // Ensure the correct ABI is imported
        functionName: "fund",
        value: ethAmount,
      });
    }
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  useEffect(() => {
    if (isConfirming) {
      setAmount("");
    }
  }, [isConfirming]);

  return (
    <div className="h-full text-text-light dark:text-text-dark text-center text-lg md:text-xl py-8 px-4 bg-background-light dark:bg-background-dark transition-colors duration-1000 ease-in-out">
      <h2 className="text-2xl md:text-4xl mb-4 font-semibold">
        Every Contribution Matters
      </h2>
      <p>Mental health isn't a luxury—it's a fundamental human right.</p>
      <div className="my-2 md:my-4 h-0.5 bg-secondary-dark dark:bg-secondary-light opacity-30 mx-auto w-3/4"></div>
      <h2 className="text-xl md:text-2xl mb-2 md:mb-4 font-semibold">
        How to contribute
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <em className="text-teal-600">Step 1:</em> Connect your Wallet
          <ul className="text-base pl-8">
            <li>We recommend using a separate account for this</li>
          </ul>
        </li>
        <li>
          <em className="text-teal-600">Step 2:</em> Enter your donation amount.
          Sepolia ETH
        </li>
        <li>
          <em className="text-teal-600">Step 3:</em> Confirm the transaction
          <ul className="text-base pl-8">
            <li>You can choose to also see the transaction on Etherscan</li>
            <li>
              You can check the total balance of the contract using the See
              Balance button.
            </li>
          </ul>
        </li>
      </ul>
      <div className="my-2 md:my-4 h-0.5 bg-secondary-dark dark:bg-secondary-light opacity-30 mx-auto w-3/4"></div>
      <p className="mt-2 text-base">
        We are transparent with all donations received hence the reason why all
        donations are made in Crypto (Sepolia ETH).
      </p>
      <section className="flex flex-col gap-4 justify-center items-center py-4">
        <ConnectKitButton.Custom>
          {({ isConnected, show, truncatedAddress }) => (
            <Button onClick={show}>
              {isConnected ? truncatedAddress : "Connect Wallet"}
            </Button>
          )}
        </ConnectKitButton.Custom>
        <label className="items-center justify-center">ETH Amount</label>
        <form className="flex mt-4 mb-0 gap-1" onSubmit={handleDonate}>
          <input
            id="ethAmount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            required
            placeholder="0.1"
            className="bg-transparent border-2 border-teal-600 w-48 h-9 p-3 focus:border-teal-600 placeholder-text-light placeholder-opacity-50 dark:placeholder-text-dark/60 rounded-md"
          />
          <Button
            className="bg-teal-600 hover:bg-teal-700 w-32 h-9 px-2 py-0 text-white flex items-center justify-center"
            disabled={!!errorMessage || !amount}
          >
            {isPending ? "Confirming..." : "Donate"}
          </Button>
        </form>

        {/* Show USD equivalent */}
        {usdValue && (
          <p className="text-teal-600 mt-2">
            Approximate value: ${usdValue} USD
          </p>
        )}

        {/* Show error message */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        {hash && (
          <div className="flex flex-col items-center gap-3 text-center">
            {isConfirming ? (
              <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                <span className="animate-pulse">●</span>
                Processing your donation...
              </div>
            ) : isConfirmed ? (
              <div className="space-y-2">
                <div className="text-green-600 dark:text-green-400 font-medium">
                  Thank you! Your donation has been confirmed 🎉
                </div>
                <a
                  href={`https://sepolia.etherscan.io/tx/${hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
                >
                  View transaction details ↗
                </a>
              </div>
            ) : error ? (
              <div className="text-red-500">
                Error:{" "}
                {(error as BaseError).shortMessage ||
                  (error as BaseError).message}
              </div>
            ) : null}
          </div>
        )}
        <Button onClick={() => {}}>See Balance</Button>
      </section>
    </div>
  );
};

export default DonateBody;
