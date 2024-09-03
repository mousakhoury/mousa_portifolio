import { useState, useEffect } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderLinks from "./HeaderLinks";
import HeaderHamburgerMenu from "./HeaderHamburgerMenu";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileNaVToggle, setMobileNaVToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const hamburgerToggleHandler = () => {
    setMobileNaVToggle(!mobileNaVToggle);
  };

  useEffect(() => {
    // Update the windowWidth state when the window resizes
    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // Conditionally render HeaderLinks and MobileNav based on the screen width
  const isMobile = windowWidth <= 600;

  return (
    <header className="header">
      <div className="header__content">
        <HeaderLogo />
        {isMobile ? <HeaderHamburgerMenu onToggle={hamburgerToggleHandler} onChange={mobileNaVToggle} /> : <HeaderLinks />}
      </div>
      {mobileNaVToggle ? <MobileNav /> : null}
    </header>
  );
}
