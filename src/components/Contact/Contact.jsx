import Section from "../../UI/Section";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact" className="contact sec-pad dynamicBg" title="CONTACT" subText="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible">
      <ContactForm />
    </Section>
  );
}
