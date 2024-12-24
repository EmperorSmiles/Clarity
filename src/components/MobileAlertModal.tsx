import React, { useState, useEffect } from "react";

const MobileAlertModal: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Add resize event listener
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Desktop Recommended
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This application is best experienced on a desktop device. Please
          switch to a laptop or desktop for optimal experience.
        </p>
        <button
          onClick={() => setIsMobile(false)}
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MobileAlertModal;
