import React from 'react'
import "./SkillsMenu.css"
const SkillsMenu = () => {
  return (
    <div>
    <h5 id="Skills"className='heading'>Skills</h5>
    <div className='skills-div'>
                  <div className='tech-icon'>
                    <img  src='./html.png' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./css-3.png' alt=""/>
                  </div>
                  <div className='tech-icon'>
                    <img  src='./js.png' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./react.svg' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./redux.png' alt=""/>
                  </div> 
                  <div className='tech-icon'>
                    <img  src='./NextJS.png' alt=""/>
                  </div> 
    </div>
       
   </div>
  )
}

export default SkillsMenu
