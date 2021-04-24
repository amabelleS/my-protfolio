import React from 'react';
import { Link } from 'react-router-dom';

import Project from './Project';

import dashbourdUrl from '../../../assets/dashboad.jpg';
import storagesFront from '../../../assets/storages-front.png';
// import communityGardens from '../../../assets/community7.jpeg';
import myNotes from '../../../assets/my-notes.png';
import crChat from '../../../assets/crChat.png';

const projects = [
  {
    name: 'our-storages',
    src: storagesFront,
    subtitle: 'Mern-App for community storages',
    description: `Community storages is A New Playground:) Were you can find different kind
     of storages, reserve items you want to borrow, or open and manage a new storage.
     State management with useContext & useReducer for full redux like functionalities.
      A storage manager can observe and manage his/her storage charts (canvasjs,
         modified to functional components). And more...`,
    url: 'https://community-storages.web.app/',
    githubUrl: 'https://github.com/amabelleS',
  },
  {
    name: 'chat-room',
    src: crChat,
    subtitle: 'A vue.js app',
    description:
      'This project is utilized with firebase authentication, and cloud firestore for the server side.',
    url: 'https://live-chat-24679.web.app/',
    githubUrl: 'https://github.com/amabelleS/Live-Chat',
  },
  {
    name: 'internship',
    src: dashbourdUrl,
    subtitle: 'React hooks, Redux & canvas.js',
    description: `Building the dashboard for the management front/react.js app of WillingApp 
      - A free, social application for matches between people in need, and people who can help.
       Implemented BOOTSTRAP date-picker, as the user chooses the date-range,
        calling the server for data for that range. Also implemented canvas.js
         - I wrote it as a functional component, that renders data received from the
          server upon loading, according to an API call. As there is no global state for
           this app, I used useReducer for the state managment.`,
    url: null,
    linkBack: (
      <Link
        to={{
          pathname: '/about',
          hash: '.about_exp',
        }}
      >
        Back to About page experience
      </Link>
    ),
  },
  {
    name: 'up-next',
    src: myNotes,
    subtitle: 'Learning Typscript, and more:)',
    description: `Started as a practice react app for learning typescript. The user can add a text or code editor,
      write code (or text snipets), click on submit, then we take the code, transpile and bundle it with 
      esbuils in the browser, and show the results.
      Next, implemnting lerna for building different packeges for a cli and local-api, and publishing all to npm`,
    url: null,
    githubUrl: 'https://github.com/amabelleS/jbook',
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
          linkBack={project.linkBack || ''}
        />
      ))}
    </ul>
  );
};

export default ProjectsList;
