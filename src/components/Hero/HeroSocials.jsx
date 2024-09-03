import React from "react";
import GetSocialIcons from "../../hooks/GetSocialIcons";

export default function HeroSocials() {
  let icons = GetSocialIcons();

  return (
    <div className="home-hero__socials">
      {icons.map((icon, index) => (
        <div key={index} className="home-hero__social">
          <a href={icon.link} className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
            <img src={`/images/icons/${icon.image}`} className="home-hero__social-icon" />
          </a>
        </div>
      ))}
    </div>
  );
}
