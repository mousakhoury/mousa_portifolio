import Section from "../../UI/Section";
import AboutContent from "./AboutContent";
import AboutSkills from "./AboutSkills";

export default function About() {
  return (
    <Section id="about" className="about sec-pad" title="About Me" subText="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology">
      <div className="about__content">
        <AboutContent />
        <AboutSkills />
      </div>
    </Section>
  );
}
