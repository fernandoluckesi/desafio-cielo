import { useEffect, useState } from "react";

export const useMedia = () => {
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);

  useEffect(() => {
    const updateWidthScreen = () => {
      setWidthScreen(window.innerWidth);
    };

    window.addEventListener("resize", updateWidthScreen);

    return () => {
      window.removeEventListener("resize", updateWidthScreen);
    };
  }, []);

  return {
    widthScreen,
  };
};
