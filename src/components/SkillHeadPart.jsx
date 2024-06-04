import React from 'react'
import "./SkillHeadPart.css"
function SkillHeadPart() {
  return (
    <>
      <section className="skill_container">
        <div className="para">
          <h1>All the skills you need in one place</h1>
          <h4>
            From critical skills to technical topics, Udemy supports your
            professional development
          </h4>
        </div>
        <div className="buttons">
          <button className="skill_btn1">Web Development</button>
          <button>IT Certifications</button>
          <button>Leadership</button>
          <button>Data Science</button>
          <button>Communication</button>
          <button className="skill_btn2">
            Business Analytics & Intelligence
          </button>
        </div>
      </section>
    </>
  );
}

export default SkillHeadPart
