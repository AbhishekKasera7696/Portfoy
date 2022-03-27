import React from 'react';
import "./mobile.css";

const Mobile = ({isOpen, setIsOpen}) => {
  return (
    <div className='mobile'>
       <div className='close_icon' onClick={() => setIsOpen(!isOpen)}>
          <i class="material-icons option_icon">close</i>
       </div>
      <div className='mobile_options'>

      <div className='mobile_option'>
           <a href="#about">
           <i class="material-icons option_icon">account_circle</i>About
           </a>
         </div>



         

         <div className='mobile_option'>
           <a href='#skills'>
           <i class="material-icons option_icon">laptop</i>Skills
           </a> 
         </div>



         <div className='mobile_option'>
           <a href='#projects'>
             <i class="material-icons option_icon">widgets</i>Projects
           </a>
         </div>



         <div className='mobile_option'>
           <a href='#contact'>
            <i class="material-icons option_icon">call</i>Contact
           </a>
         </div>
       </div>
    </div>
  )
}

export default Mobile
