import { useState, useEffect } from "react";

const useURL = ({ mobile, desktop }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [url, setUrl] = useState(mobile);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (width >= 640) {
      setUrl(desktop);
    } else {
      setUrl(mobile);
    }
  }, [width]);

  return url;
};

export default useURL;
