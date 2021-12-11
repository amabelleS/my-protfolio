import React, { useState, useEffect } from 'react';

import ReactPlayer from 'react-player';

import Button from '../shared/components/FormElements/Button';

import './Home.css';

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="player-background">
        <ReactPlayer
          // url="https://www.youtube.com/watch?v=Ach8lgF6-AY&ab_channel=KOANSound"
          // url="https://www.youtube.com/watch?v=NVb5GV6lntU&ab_channel=PsychedelicTrips"
          // url="https://www.youtube.com/watch?v=gxxqdrrpgZc&ab_channel=poisonteddy%E0%A4%93%E0%A4%AE%E0%A5%8D"
          // url="https://youtu.be/FHVD9ft_ANw"
          // url="https://youtu.be/4oh7lct04Us"
          // url="https://youtu.be/3pLWskANffo"

          // url="https://www.youtube.com/watch?v=4xKRQ0thuew&ab_channel=CloZee"
          url="https://youtu.be/Os5qrLhHQd8"
          // url="https://www.youtube.com/watch?v=zXTpASSd9xE&ab_channel=Fractaluniverse"
          className="react-player"
          playing={true}
          muted={isMuted}
          width="100%"
          height="100%"
          controls={true}
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>
      <div className="content-wrapper">
        <div className="gradient_from-black home_hello">
          <h1>Hello, World. I’m Amabelle.</h1>
          <h2>Hover Over</h2>
          <div className="home_btn">
            <Button
              onClick={() => setIsMuted(!isMuted)}
              inverse
              className="home_mute"
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </Button>
          </div>
        </div>

        <div className="gradient_static-shade home_about">
          <h1 className="slide-in-left">Full-Stack Developer</h1>
          {/* <h1 className="slide-in-right">A UI/UX Designer</h1> */}
          <h1 className="slide-in-left">An ideas actualizer</h1>
          <div className="home_btn">
            <Button to="/about">More about me</Button>
          </div>
        </div>

        <div className="gradient_to-clear home_project">
          <div className="home_projects_main">
            <h1 className="home_projects_main_title">My Projects</h1>
            <div className="home_projects_main_list">
              <article>
                <a href="https://www.npmjs.com/package/my-js-snippets">
                  <h2>my-js-snippets</h2>
                </a>
                <p>NPM packages - An interactive coding enviroment</p>
              </article>
              <article>
                <a href="https://community-storages.web.app/">
                  <h2>Community Storages</h2>
                </a>
                <p>Mern-app for the managment of storages</p>
              </article>
              <article>
                <a href="https://live-chat-24679.web.app/">
                  <h2>Live Chat</h2>
                </a>
                <p>Vue.js-app, with Firebase and FireStore</p>
              </article>
            </div>
          </div>
          <Button inverse to="/projects">
            More projects
          </Button>
        </div>
        <div className="gradient_clear">
          <h1>My Blog - Under construction..</h1>
          <Button to="/blog">My blog</Button>
        </div>
        <div className="gradient_to-black home_fotter">
          <h3>on the search for my next challenge 🤑</h3>
          <img
            alt="my avater"
            src="https://avatars.githubusercontent.com/u/45571546?v=4"
            style={{
              clipPath: 'circle(50% at 50% 50%)',
              maxWidth: '42vw',
              maxHeight: '42vh',
            }}
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
