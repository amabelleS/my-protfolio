import React from 'react';

import Project from './Project';

import dashbourdUrl from '../../../assets/dashboad.jpg';
import storagesItems from '../../../assets/items.png';
import communityGardens from '../../../assets/community7.jpeg';
import crChat from '../../../assets/crChat.png';

const projects = [
  {
    name: 'our-storages',
    src: storagesItems,
    subtitle: 'Mern-App for community storages',
    description: `Community storages is A New Playground:) Were you can find different kind
     of storages, reserve items you want to borrow, or open and manage a new storage.
     State managment with useContext & useReducer for full redux like functionalities. A storage manager can observe and manage his/hers storage charts (canvasjs, modified to functional components). And more...`,
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
    githubUrl: 'https://github.com/amabelleS/Live-Chat',
  },
  {
    name: 'internship',
    src: dashbourdUrl,
    subtitle: 'React hooks, Redux & canvas.js',
    description: `Building the dashboard for the managment front/react.js app of WillingApp 
      - A free, social application for matches between ppl in need, and ppl who can help.
       Implemented BOOTSTRAP date-picker, as the user chooses the date-range,
        callind the server for data for that range. Also implemented canvas.js
         - wrote it as a functional component, that render data received from the
          server upon louding, according to an API call. As there is no global state for
           this app, I used useReducer for the state managment.`,
    url: null,
  },
  {
    name: 'up-next',
    src: communityGardens,
    subtitle: 'Community Gardens',
    description: 'My next personal project. Want to colaborate?',
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
