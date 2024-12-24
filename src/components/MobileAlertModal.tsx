import React, { useState, useEffect } from "react";

type DeviceType = "phone" | "tablet" | null;

const MobileAlertModal: React.FC = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>(null);

  useEffect(() => {
    const width = window.innerWidth;

    // Common breakpoints:
    // Phones: < 768px
    // Tablets: 768px - 1024px
    if (width < 768) {
      setDeviceType("phone");
    } else if (width >= 768 && width <= 1024) {
      setDeviceType("tablet");
    }
  }, []); // Only run on mount

  if (!deviceType) return null;

  const getMessage = () => {
    switch (deviceType) {
      case "phone":
        return "We noticed you're browsing on a smartphone. For the best experience, we recommend opening this in your device's wallet browser.";
      case "tablet":
        return "We noticed you're using a tablet. For optimal experience, we recommend accessing this through your tablet's wallet browser.";
      default:
        return "";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Hey there! 🙃
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{getMessage()}</p>
        <button
          onClick={() => setDeviceType(null)}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MobileAlertModal;
