/* eslint-disable react/no-unescaped-entities */
import Button from "../../UI/Button";

export default function AboutContent() {
  return (
    <div className="about__content-main">
      <h3 className="about__content-title">Get to know me!</h3>
      <div className="about__content-details">
        <div className="about__content-details-para">
          <p className="about__content-details-para">
            I'm a <strong>Full Stack Web Developer</strong> with expertise in building both the front-end and back-end of websites and web applications, driving the overall success of the product. Explore some of my projects in the <strong>Projects</strong> section to see my work in action.
          </p>
          <p className="about__content-details-para">
            I’m passionate about sharing my knowledge and experiences in <strong>full stack development</strong>, aiming to support and inspire others in the developer community. Whether it's tips on coding or insights into the latest technologies, I enjoy contributing to the community.
          </p>
          <p className="about__content-details-para">
            I'm currently open to <strong>job</strong> opportunities where I can apply my skills, continue to learn, and grow as a developer. If you have a role that aligns with my experience and capabilities, <strong>please feel free to reach out</strong>.
          </p>
        </div>
      </div>

      <Button link="./#contact" className="btn--med btn--theme dynamicBgClr">
        Contact
      </Button>
    </div>
  );
}
