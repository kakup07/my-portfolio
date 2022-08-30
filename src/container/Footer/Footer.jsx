import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import './Footer.scss';

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:pandey.kaku@live.com" className="p-text">pandey.kaku@live.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 (828) 758-0494" className="p-text">+91 8287580494</a>
        </div>
      </div>
    
      <form name="contact"  data-netlify="true">
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username"  />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button type="submit" className="p-text">{'Send Message'}</button>
        </div>
      </form>

      <div id='resume' className="app__footer-resume">
        <button><a href="https://drive.google.com/file/d/1-O9YyJcZDDN8InEjAHLyUFb67OhO2UO4/view?usp=sharing" rel="noreferrer" target="_blank" download>Download Resume</a></button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);