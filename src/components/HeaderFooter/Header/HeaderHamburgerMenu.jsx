import React from "react";

export default function HeaderHamburgerMenu({ onToggle, onChange }) {
  return (
    <div className="header__main-ham-menu-cont" onClick={onToggle}>
      <img src={onChange ? "/images/ham-menu-close.svg" : "/images/ham-menu.svg"} alt="hamburger menu" className="header__main-ham-menu" />
    </div>
  );
}
