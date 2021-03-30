import React from 'react';

import { SocialIcon } from 'react-social-icons';

import './Fotter.css';

const Fotter = () => {
  const url = 'https://www.linkedin.com/in/amabelle-trachtenberg/';
  const myEmail = 'amabelletr@gmail.com';
  const gitHubLink = 'https://github.com/amabelleS';

  return (
    <div className="fotter">
      <SocialIcon
        url={url}
        network="linkedin"
        bgColor="#ef476f"
        fgColor="transparent"
        label="My linkedIn"
        style={{ height: '2em', width: '2em' }}
      />
      <SocialIcon
        className="mail"
        url={'mailto:' + myEmail}
        network="email"
        bgColor="#ef476f"
        fgColor="transparent"
        label="My email"
        style={{ height: '2em', width: '2em' }}
      />
      <SocialIcon
        className="gitHub"
        url={gitHubLink}
        network="github"
        bgColor="#ef476f"
        fgColor="transparent"
        label="My github"
        style={{ height: '2em', width: '2em' }}
      />
    </div>
  );
};

export default Fotter;
