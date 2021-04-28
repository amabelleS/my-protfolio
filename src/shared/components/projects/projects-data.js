import { Link } from 'react-router-dom';

import dashbourdUrl from '../../../assets/dashboad.jpg';
import storagesFront from '../../../assets/storages-front.png';
import myNotes from '../../../assets/my-notes.png';
import crChat from '../../../assets/crChat.png';
import eCommerce from '../../../assets/e-commerce.png';

export const projects = [
  {
    name: 'my-js-snippets',
    src: myNotes,
    subtitle: 'NPM organization',
    description: `A node cli that start a web service with addvance javascript sandbox.
    The tool enables the user to write ES-07 code (or text snipets) in the browser, 
    showing the results in a preview window and saving them to the local file system.
    started as an expriment for learning typescript (with react and redux) and implementing Esbuils - 
    An extremely fast JavaScript bundler. Also, managed mono-repo with lerna.`,
    githubUrl: 'https://github.com/amabelleS/my-js-snippets',
    npmUrl: 'https://www.npmjs.com/package/my-js-snippets',
  },
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
    src: eCommerce,
    subtitle: 'E-commerce application, learning graphql, and more:)',
    description: `A massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase.
    In Development`,
    url: null,
    githubUrl: 'https://github.com/amabelleS/e-commerce',
  },
];
