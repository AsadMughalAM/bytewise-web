"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("loaded");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader js-preloader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Preloader;
