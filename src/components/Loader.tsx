import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    // Update dots every 500ms
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 500);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#00539f] text-white">
      <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-white mb-4"></div>
      <p className="text-xl font-semibold">EPICFORGE SOFTWARE {dots}</p>
    </div>
  );
};

export default Loader;
