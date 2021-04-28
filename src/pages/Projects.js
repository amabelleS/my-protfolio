import React, { useState } from 'react';

import TextTransition, { presets } from 'react-text-transition';

import ProjectsList from '../shared/components/projects/ProjectsList';

import nextProjectsFront from '../assets/community7.jpeg';

import './Projects.css';

const TEXTS = [
  'Typescript - implement with react',
  'Angular',
  'graphql',
  'Community Gardens',
  // 'Community Gardens',
];

const Projects = () => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <React.Fragment>
      <div className="projects_content-wrapper">
        <ProjectsList />

        <div className="project project_up-next">
          <div className="projects_info projects_info_subtitle">
            <h1>Next Projects</h1>
            {/* <h3 className="projects_info_subtitle">desc</h3> */}
          </div>
          <div className="projects_img_container next">
            <img src={nextProjectsFront} alt="next-project" />
          </div>

          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.molasses}
            className="projects-text"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
