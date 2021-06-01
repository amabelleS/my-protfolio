import React from 'react';

import Project from './Project';
import { projects } from './projects-data';

const ProjectsList = () => {
  return (
    <ul>
      {projects.map((project) => (
        <Project
          name={project.name}
          src={project.src}
          url={project.url || ''}
          githubUrl={project.githubUrl || ''}
          subtitle={project.subtitle}
          description={project.description}
          linkBack={project.linkBack || ''}
          npmUrl={project.npmUrl || ''}
        />
      ))}
    </ul>
  );
};

export default ProjectsList;
