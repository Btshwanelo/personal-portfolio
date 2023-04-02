import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/Btshwanelo/" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/tshwanelo-bucibo-b9193ab8/" target="_blank" rel="noreferrer">
        <AiFillLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
