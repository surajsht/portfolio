import { mySkills } from "../../Data";
import "./skill.css";

const Skills = () => {
  return (
    <section id="skills" className="section-spacing">
      <div className="wrapper">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="section-body">
          {mySkills.map((item) => {
            return (
              <div className="skill-item" key={item.id}>
                <img src={item.img} alt="skill-icon" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
