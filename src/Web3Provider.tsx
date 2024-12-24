import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { useEffect, useState } from "react";
import logo from "../src/assets/logo.svg";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [sepolia],
    transports: {
      [mainnet.id]: http(
        `https://eth-mainnet.g.alchemy.com/v2/${
          import.meta.env.VITE_ALCHEMY_MAINNET_API_KEY
        }`
      ),
      [sepolia.id]: http(
        `https://eth-sepolia.g.alchemy.com/v2/${
          import.meta.env.VITE_ALCHEMY_SEPOLIA_API_KEY
        }`
      ),
    },

    // Required API Keys
    walletConnectProjectId: import.meta.env
      .VITE_PUBLIC_WALLETCONNECT_PROJECT_ID as string,

    // Required App Info
    appName: "Clarity",

    // Optional App Info
    appDescription: "Illuminating minds",
    // appUrl: "https://family.co", // your app's url
    appIcon: logo, // your app's icon, no bigger than 1024x1024px (max. 1MB)
    pollingInterval: 10000,
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark" ? "dark" : "light";
    }

    // Then check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    // Sync theme with document class and localStorage
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          customTheme={theme === "dark" ? "dark" : "light"}
          mode={theme === "dark" ? "dark" : "light"}
        >
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
