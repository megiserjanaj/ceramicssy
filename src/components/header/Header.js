import "./styles.scss";
import { useState, useEffect } from "react";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resizeFnx = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFnx);
    return () => {
      window.removeEventListener("resize", resizeFnx);
    };
  }, []);

  return (
    <div className="header">
      {screenWidth >= 625 ? <Navigation /> : <MobileNavigation />}
    </div>
  );
};

export default Header;
