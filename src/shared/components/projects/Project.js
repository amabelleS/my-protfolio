import React from 'react';

import './ProjectsList.css';

const Project = (props) => {
  return (
    // <li className={`project  ${(props.background && 'project--storages') || ''}`}>
    <li className={`project project--${props.name}`}>
      {/* <h2 className="project__badge">{props.name}</h2> */}
      <div className="projects_img_container">
        <img src={props.src} alt={props.name} />
      </div>
      <div className="projects_info">
        <h1 className="project__badge">{props.name}</h1>
        {/* <h1>{props.name}</h1> */}
        <h2 className="projects_info_subtitle">{props.subtitle}</h2>
        <h4 className="projects_info_description">{props.description}</h4>
        {props.url && (
          <div className="project_info_link">
            <a href={props.url}>To {props.name} website</a>
          </div>
        )}
        {props.githubUrl && (
          <div className="project_info_link">
            <a href={props.githubUrl}>To gitHub repo</a>
          </div>
        )}
      </div>
    </li>
  );
};

export default Project;
