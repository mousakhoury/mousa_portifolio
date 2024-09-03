import GetSocialIcons from "../../../hooks/GetSocialIcons";
import SocialIcon from "./SocialIcon";

export default function SocialIconsContainer() {
  let icons = GetSocialIcons();

  return (
    <div className="main-footer__social-cont">
      {icons.map((icon, index) => (
        <SocialIcon key={index} href={icon.link} src={`/images/icons/${icon.image}`} />
      ))}
    </div>
  );
}
