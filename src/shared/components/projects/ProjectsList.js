import React from 'react';

import Project from './Project';

import dashbourdUrl from '../../../assets/dashboad.jpg';
import storagesItems from '../../../assets/items.png';

const projects = [
  {
    name: 'storages',
    src: storagesItems,
    description: 'Community storages',
    url: 'https://community-storages.web.app/',
  },
  {
    name: 'internship',
    src: dashbourdUrl,
    description: 'Community storages',
    url: null,
  },
];

const ProjectsList = () => {
  return (
    <ul>
      {projects.map((project) => (
        <Project
          name={project.name}
          src={project.src}
          url={project.url}
          description={project.description}
        />
      ))}
    </ul>
  );
};

export default ProjectsList;
