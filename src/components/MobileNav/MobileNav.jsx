import React from 'react'
import './MobileNav.css'
const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div 
    className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick ={toggleMenu}>
        <div className="mobile-menu-container">
         
        <ul>
            <li>
              <a href="#" className='menu-item' onClick={() => scrollToSection("Home")}>Home</a>
            </li>
            <li>
              <a href="#Technical Proficiency" className='menu-item' onClick={() => scrollToSection("Technical Proficiency")}>Technical Proficiency</a>
            </li>
            
            <li>
              <a href="#projects" className='menu-item' onClick={() => scrollToSection("projects")}>Projects</a>
            </li>
            <li>
            <a  href="#Skills" className='menu-item' onClick={() => scrollToSection("Skills")}>Skills</a>
            </li>
            <li>
              <a href="#Contact Me"className='menu-item' onClick={() => scrollToSection("Contact Me")}>Contact Me</a>
            </li>
              <button className='contact-btn' onClick={() => {
                 window.location.href = 'https://drive.google.com/file/d/1_faSJ7SEZvBgVBxL1zFcrLCYXlWfclX0/view?usp=sharing';
              }}>
                Resume
              </button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default MobileNav
