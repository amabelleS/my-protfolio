import React from 'react';

import Project from './Project';

import dashbourdUrl from '../../../assets/dashboad.jpg';
import storagesItems from '../../../assets/items.png';
import communityGardens from '../../../assets/community7.jpeg';
import crChat from '../../../assets/crChat.png';

const projects = [
  {
    name: 'storages',
    src: storagesItems,
    subtitle: 'Mern-App for community storages',
    description: `Community storages is A New Playground:) Were you can find different kind
     of storages, reserve items you want to borrow, or open and manage a new storage.
     State managment with useContext & useReducer only for full redux like functionalities. A storage manager can observe and manage his/hers storage charts (canvasjs, modified to functional components). And more...`,
    url: 'https://community-storages.web.app/',
    githubUrl: 'https://github.com/amabelleS',
  },
  {
    name: 'chat-room',
    src: crChat,
    subtitle: 'A vue.js app',
    description:
      'This project is utelized with firebase authentication, and cloud firestore for the server side.',
    url: 'https://live-chat-24679.web.app/',
  },
  {
    name: 'internship',
    src: dashbourdUrl,
    subtitle: 'React hooks, Redux & canvas.js',
    description:
      'Building the dashboard for the managment front/react.js app of WillingApp',
    url: null,
  },
  {
    name: 'up-next',
    src: communityGardens,
    subtitle: 'Community gardens',
    description: 'Community gardens',
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
          url={project.url || ''}
          githubUrl={project.githubUrl || ''}
          subtitle={project.subtitle}
          description={project.description}
        />
      ))}
    </ul>
  );
};

export default ProjectsList;
