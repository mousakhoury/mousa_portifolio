/* eslint-disable react/no-unescaped-entities */
import Button from "../../UI/Button";

export default function HeroContent() {
  return (
    <div className="home-hero__content">
      <h1 className="heading-primary">Hey, I'm Mousa Khoury</h1>
      <div className="home-hero__info">
        <p className="text-primary">A Full Stack Web Developer building both the front-end and back-end of websites and web applications, contributing to the overall success of the product.</p>
      </div>
      <div className="home-hero__cta">
        <Button link="./#projects" className="btn--bg">
          Projects
        </Button>
      </div>
    </div>
  );
}
