export default function HeaderLinks() {
  return (
    <div className="header__main">
      <ul className="header__links">
        <li className="header__link-wrapper">
          <a href="./#home" className="header__link">
            Home
          </a>
        </li>
        <li className="header__link-wrapper">
          <a href="./#about" className="header__link">
            About
          </a>
        </li>
        <li className="header__link-wrapper">
          <a href="./#projects" className="header__link">
            Projects
          </a>
        </li>
        <li className="header__link-wrapper">
          <a href="./#contact" className="header__link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
