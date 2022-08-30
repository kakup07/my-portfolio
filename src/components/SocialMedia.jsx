import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import {  AiFillGithub } from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/kakup07"><AiFillGithub /></a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/rakshit-pandey-a87157177/"><BsLinkedin /></a>
    </div>
   
  </div>
);

export default SocialMedia;