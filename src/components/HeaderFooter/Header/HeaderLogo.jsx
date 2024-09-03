export default function HeaderLogo() {
  return (
    <a href="./">
      <div className="header__logo-container">
        <div className="header__logo-img-cont">
          <img src={`/images/logo.svg`} alt="Mousa Khoury" className="header__logo-img" />
        </div>
        <span className="header__logo-sub">Mousa Khoury</span>
      </div>
    </a>
  );
}
