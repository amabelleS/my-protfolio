import React from 'react';

import './ProjectsList.css';

const Project = (props) => {
  return (
    // <li className={`project  ${(props.background && 'project--storages') || ''}`}>
    <li className={`project project--${props.name}`}>
      <div className="projects_img_container">
        <img src={props.src} alt="dashbourd" />
      </div>
      <div className="projects_info">
        <h1>{props.name}</h1>
        <h3 className="projects_info_subtitle">{props.description}</h3>
        <a href={props.url}>{props.name}</a>
      </div>
    </li>
  );
};

export default Project;
