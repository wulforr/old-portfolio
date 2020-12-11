import React from 'react'
import { FaGithub } from 'react-icons/fa';
import './project.css'
import PriceWatcher from '../../assets/price.png'

const arr = ["1","2","3","4","5","6"];

export default function Project() {
  return (
    <section className="project-section">
      <h3>My Recent Projects</h3>
      <p>Here are a few projects I've worked on recently. Want to see more? <span className="primary-text">Email me.</span></p>
      <div className="project-wrapper">
      {arr.map((ele,index) => {
        return (
          <div className="project-card" key={index}>
          <img src={PriceWatcher} alt="project" />
          <div className="overlay">
            <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
            <button className="btn project-btn">Visit Website</button>
          </div>
        </div>
        )
      })}
      </div>
      <a href="https://github.com/wulforr" target="_blank" rel="noopener noreferrer" className="btn more-projects-btn"><FaGithub className="githubIcon"/> See more on Github</a>
    </section>
  )
}
