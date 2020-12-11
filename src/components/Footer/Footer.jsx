import React from 'react'
import './footer.css'
import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'
import {IoIosMail} from "react-icons/io"


export default function Footer() {
  return (
    <footer>
      <h3>Get in touch on social media</h3>
      <div className="social-media-wrapper">
        <a href="https://twitter.com/wulforr" target="_blank" rel="noreferrer" className="twitter-icon"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/shaurya-vardhan-singh/" target="_blank" rel="noreferrer" className="linkedIn-icon"><FaLinkedin /></a>
        <a href="https://github.com/wulforr" target="_blank" rel="noreferrer" className="github-icon"><FaGithub /></a>
        <a href="mailto:gsshaurya@gmail.com" target="_blank" rel="noreferrer" className="email-icon"><IoIosMail /></a>
      </div>
    </footer>
  )
}
