export default function AboutSkills() {
  let skills = ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJs", "Web3.js", "SvelteKit", "NodeJs", "Tailwind", "PHP", "Laravel", "Git", "MySQL", "PocketBase", "SEO", "GraphQL", "Rest"];

  return (
    <div className="about__content-skills">
      <h3 className="about__content-title">My Skills</h3>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skills__skill">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
