import React from "react";

export default function MobileNav() {
    return (
        <div className="header__sm-menu">
            <div className="header__sm-menu-content">
                <ul className="header__sm-menu-links">
                    <MobileNavItem label="Home" link="./" />
                    <MobileNavItem label="About" link="./#about" />
                    <MobileNavItem label="Projects" link="./#projects" />
                    <MobileNavItem label="Contact" link="./#contact" />
                </ul>
            </div>
        </div>
    );
}

function MobileNavItem({ label, link }) {
    return (
        <li className="header__sm-menu-link">
            <a href={link}>{label}</a>
        </li>
    );
}
