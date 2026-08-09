import "./education.css";
import {
  FaGraduationCap,
  FaSchool,
} from "react-icons/fa";

function Education() {

  const education = [

    {
      icon: <FaGraduationCap />,
      title: "Master of Computer Applications (MCA)",
      institute: "Chandigarh University",
      year: "2025 - 2027",
      score: "Currently Pursuing",
      description:
        "Currently pursuing a Master of Computer Applications (MCA) with a focus on full-stack web development, software engineering, database management, cloud technologies, and modern application development while continuously strengthening practical programming and problem-solving skills.",
    },

    {
      icon: <FaGraduationCap />,
      title: "Bachelor of Science in Computer Science",
      institute: "Motherhood University",
      year: "2022 - 2025",
      score: "",
      description:
        "Successfully completed a Bachelor of Science in Computer Science from Motherhood University, building a strong foundation in programming, web development, database management, software engineering, operating systems, and object-oriented programming through academic coursework and practical projects.",
    },

    {
      icon: <FaSchool />,
      title: "Higher Secondary (Intermediate - PCM)",
      institute: "Doon Public Senior Secondary School, Roorkee",
      year: "2021 - 2022",
      score: "",
      description:
        "Completed Higher Secondary education with Physics, Chemistry, and Mathematics (PCM), strengthening analytical thinking, logical reasoning, and mathematical problem-solving skills that support my technical background.",
    },

    {
      icon: <FaSchool />,
      title: "Secondary School (Matriculation)",
      institute: "Doon Public Senior Secondary School, Roorkee",
      year: "2020 - 2021",
      score: "",
      description:
        "Completed Secondary School education while building discipline, curiosity, and a strong interest in computers and technology, which inspired me to pursue a career in Computer Science.",
    },

  ];

  return (

    <section className="education" id="education">

      <div className="education-container">

        <div className="education-heading">

          <span>MY EDUCATION</span>

          <h2>Academic Journey</h2>

          <p>
            My academic journey reflects continuous learning, technical growth,
            and a commitment to building a strong foundation in computer science
            and modern software development.
          </p>

        </div>

        <div className="education-grid">

          {education.map((item, index) => (

            <div className="education-card" key={index}>

              <div className="education-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <h4>{item.institute}</h4>

              <div className="education-info">

                <span>{item.year}</span>

                {item.score && (
                  <span>{item.score}</span>
                )}

              </div>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Education;