import React from 'react';

import ProjectsList from '../shared/components/projects/ProjectsList';

import nextProjectsFront from '../assets/community7.jpeg';

import './Projects.css';

const Projects = () => {
  return (
    <React.Fragment>
      <div className="projects_content-wrapper">
        <ProjectsList />

        <div className="project project_up-next">
          <div className="projects_img_container next">
            <img src={nextProjectsFront} alt="next-project" />
          </div>
          <div className="projects_info">
            <h1>Next Projects</h1>
            <h3 className="projects_info_subtitle">desc</h3>
            {/* <a href={projects[0].url}>{projects[0].name}</a> */}
          </div>
        </div>
        {/* <div className="project project_storages">
          <div className="projects_img_container">
            <img src={projects[0].src} alt="dashbourd" />
          </div>
          <div className="projects_info">
            <h1>{projects[0].name}</h1>
            <h3 className="projects_info_subtitle">
              {projects[0].discription}
            </h3>
            <a href={projects[0].url}>{projects[0].name}</a>
          </div>
        </div>

        <div className="project project_dashboard">
          <div className="projects_img_container">
            <img src={projects[1].src} alt="storages" />
          </div>
          <div className="projects_info">
            <h1>{projects[1].name}</h1>
            <h3 className="projects_info_subtitle">
              {projects[1].discription}
            </h3>
            <a href={projects[1].url}>{projects[1].name}</a>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Projects;
