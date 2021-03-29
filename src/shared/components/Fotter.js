import React from 'react';

import { SocialIcon } from 'react-social-icons';

import './Fotter.css';

const Fotter = () => {
  const url = 'https://www.linkedin.com/in/amabelle-trachtenberg/';
  const myEmail = 'amabelletr@gmail.com';
  const gitHubLink = 'https://github.com/amabelleS';

  return (
    <div className="fotter">
      <span>
        <a href={url} className="linkedin">
          {' '}
          <SocialIcon
            url="https://linkedin.com/in/jaketrent"
            bgColor="#ef476f"
            fgColor="transparent"
            label="My linkedIn"
            style={{ height: 15, width: 15 }}
          />
        </a>
      </span>
      <a className="mail" href={'mailto:' + myEmail}>
        {' '}
        <SocialIcon
          network="email"
          bgColor="#ef476f"
          fgColor="transparent"
          label="My email"
          style={{ height: '1em', width: '1em' }}
        />
      </a>
      <a className="gitHub" href={gitHubLink}>
        <SocialIcon
          url="https://github.com/jaketrent"
          bgColor="#ef476f"
          fgColor="transparent"
          label="My github"
          style={{ height: 15, width: 15 }}
        />
      </a>
    </div>
  );
};

export default Fotter;
