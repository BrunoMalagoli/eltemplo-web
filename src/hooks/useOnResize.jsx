import { useState, useEffect } from "react";

export default function useOnResize() {
  const [isLarge, setIsLarge] = useState(Boolean);
  const [isMedium, setIsMedium] = useState(Boolean);
  const [isSmall, setIsSmall] = useState(Boolean);
  const [isMobile, setIsMobile] = useState(Boolean);
  const handleWindowResize = () => {
    window.innerWidth > 992 ? setIsLarge(true) : setIsLarge(false);
    window.innerWidth >= 992 ? setIsMobile(false) : setIsMobile(true);
    window.innerWidth > 768 ? setIsMedium(false) : setIsMedium(true);
    window.innerWidth > 480 ? setIsSmall(false) : setIsSmall(true);
  };
  useEffect(() => {
    window.onload = handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("load", handleWindowResize);
    };
  }, []);
  return { isLarge , isMedium , isSmall , isMobile };
}