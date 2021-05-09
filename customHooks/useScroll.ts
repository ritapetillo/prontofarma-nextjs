import { useState, useEffect } from "react";

const useScroll = () => {
  const [scrollStatus, setScrollStatus] = useState("top");

  const handleScroll = () => {
    const scrollY = document.scrollingElement.scrollTop;
    if (scrollY > 200) {
      setScrollStatus("scrolled");
    } else {
      setScrollStatus("top");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => handleScroll());

    return () => document.removeEventListener("scroll", () => handleScroll());
  }, []);

  return { scrollStatus };
};

export default useScroll;
