import React from 'react';
import "./socialContact.css";
import { SocialData } from '../../../data/social.js';

function SocialContact() {

     const data = SocialData;
  
   
  return (
    <div className='social_contact'>
       {data.map((item)=>{
        
         return<a href={item.link} target={'_blank'}>
           <div className='social_icon_div'>
             <img src={item.icon} className="social_icon" alt='newpic'/>
           </div> 
       </a>
           
       })}
    </div>
  )
}

export default SocialContact;
