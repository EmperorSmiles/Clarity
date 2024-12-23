import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(
      `eth-sepolia.g.alchemy.com/v2/${
        import.meta.env.VITE_ALCHEMY_SEPOLIA_API_KEY
      }`
    ),
  },
});
