import React from 'react'
import './myskills.css'
import skills from '../../assets/skills.svg'


export default function MySkills() {
  return (
    <section className="myskills">
      <div className="skills-content">
        <h3>My Skills</h3>
        <p>I am fullstack software developer proficient in MERN stack.</p>
        <p>I mainly use React for frontend Development and NodeJs for backend development</p>
        <p>I have tinkered with php, ionic and firebase as well</p>
      </div>
      <div className="myskills-image-wrapper">
        <img src={skills} alt="Skills illustration" />
      </div>
    </section>
  )
}
