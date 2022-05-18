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
            <a target={"_blank"} rel={'noreferrer'} href={require('../../../profile/pp2/resume5.pdf')}>
            <i class="material-icons download_icon">cloud_download</i>
             Resume
            </a>

          </div>
       </div>
    </div>
  )
}

export default Contact
