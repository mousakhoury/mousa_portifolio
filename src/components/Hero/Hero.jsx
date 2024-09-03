import HeroContent from "./HeroContent";
import HeroSocials from "./HeroSocials";

export default function Hero() {
  return (
    <section className="home-hero" id="home">
      <HeroContent />
      <HeroSocials />
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
