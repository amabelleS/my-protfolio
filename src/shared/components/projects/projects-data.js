import { Link } from 'react-router-dom';

import dashbourdUrl from '../../../assets/dashboad.jpg';
import storagesFront from '../../../assets/storages-front.png';
import myNotes from '../../../assets/my-notes1.png';
import crChat from '../../../assets/crChat.png';
import eCommerce from '../../../assets/e-commerce.png';
import ticTacToe from '../../../assets/tic-tac-toe.png';
import recipes from '../../../assets/angular-recipes.png';
import network from '../../../assets/angular-network.png';
import pplFinder from '../../../assets/ppl-finder-home.png';

export const projects = [
  {
    name: 'my-js-snippets',
    src: myNotes,
    subtitle: 'NPM organization',
    description: `A node cli that start a web service with advanced javascript sandbox (an interactive 
    coding enviroment). The tool enables the user to write ES-07 code snipets, see it excuted in
    a preview window in the browser, and write comprehesive documentation using markdown. All the changes
    are saved to the local file system.
    This Application was developed with typescript, react, redux, node.js, express, and more. 
    Implementing Esbuils - An extremely fast JavaScript bundler. Managed a mono-repo with lerna.`,
    githubUrl: ' https://github.com/amabelleS/my-favorite-images',
    npmUrl: 'https://my-favorite-images.web.app',
  },
  {
    name: 'my-favorite-images',
    src: myNotes,
    subtitle: 'NPM organization',
    description: `A node cli that start a web service with advanced javascript sandbox (an interactive 
    coding enviroment). The tool enables the user to write ES-07 code snipets, see it excuted in
    a preview window in the browser, and write comprehesive documentation using markdown. All the changes
    are saved to the local file system.
    This Application was developed with typescript, react, redux, node.js, express, and more. 
    Implementing Esbuils - An extremely fast JavaScript bundler. Managed a mono-repo with lerna.`,
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
    name: 'ppl-finder',
    src: pplFinder,
    subtitle: 'React.js app',
    description: `React app with styled-component and material-ui, Making an api request to randomuser.me, infinity scrolling, 
      checkboxes for filtering by city, Favorites page with an option to add free text to each user, and search him 
      by his name, city or the users input text. The list can be exported to a CSV file`,
    url: 'https://amabelles.github.io/PplFinder',
    githubUrl: 'https://github.com/amabelleS/PplFinder',
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
    name: 'my-recipes',
    src: recipes,
    subtitle: 'Learnig Angular',
    description: `Web app for storing your favorite recipes and their ingredients. 
    Firebase real-time database for the backend and firebase also for hosting. Styled with Bootstrap.
    I'm learnig angular and this app need some improvments, so it's still in development`,
    url: 'https://my-recipes-21fec.web.app',
    githubUrl: 'https://github.com/amabelleS/My-recipes',
  },
  {
    name: 'network',
    src: network,
    subtitle: 'IN DEVELOPMENT: MEAN-STACK',
    description: `Implemnting angular with practice apps. Styled with Bootstrap.
    Thinking about developing the this app for community gardeners in the future`,
    // url: 'https://tic-tac-toe-91637.web.app',
    githubUrl: 'https://github.com/amabelleS/My-network',
  },
  {
    name: 'tic-tac-toe',
    src: ticTacToe,
    subtitle: 'Angular - Practice',
    description: `An angular practice app - I wanted to see how easy it is to build a PWA with angular. Deployed with firebase. 
      Implemented Nebular for styles.`,
    url: 'https://tic-tac-toe-91637.web.app',
    // githubUrl: 'https://github.com/amabelleS/Live-Chat',
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
