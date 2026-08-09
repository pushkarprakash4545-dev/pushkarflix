import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Python",
        "Node.js",
        "PHP",
        "REST API",
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        "MySQL",
        "Git",
        "GitHub",
        "VS Code",
      ],
    },
    {
      title: "Other Skills",
      skills: [
        "Cyber Security",
        "UI/UX",
        "Problem Solving",
        "Teamwork",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        <div className="section-heading">
          <span>MY EXPERTISE</span>
          <h2>Skills & Technologies</h2>
          <p>
            Technologies and tools I use to build modern web applications
            and continuously improve my development skills.
          </p>
        </div>

        <div className="skills-grid">

          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>

              <h3>{category.title}</h3>

              <div className="skill-list">

                {category.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;