import React from 'react';
import Separator from '../common/separator';
import SocialContact from '../common/social_contact';
import "./contact.css";

const Contact = () => {
  return (
    <div className='contact'>
       <Separator />

       <label className='section_title'>Contact</label>

       <div className='contact_container'>
          <div className='contact_left'>
            <p>Want to get in touch ? Contact me on any of the platform</p>
            <SocialContact />
          </div>
          <div className='download'>
            <a target={"_blank"} rel={'noreferrer'} href={require('https://drive.google.com/file/d/1mOxsyFBwpmovLEMo9BxJX1gNvuWQg7F5/view?usp=sharing')}>
            <i class="material-icons download_icon">cloud_download</i>
             Resume
            </a>

          </div>
       </div>
    </div>
  )
}

export default Contact
