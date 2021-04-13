import React, { useState } from 'react';

import ReactPlayer from 'react-player';

import Button from '../shared/components/FormElements/Button';

import './Home.css';

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <React.Fragment>
      <div className="player-background">
        <ReactPlayer
          // url="https://www.youtube.com/watch?v=Ach8lgF6-AY&ab_channel=KOANSound"
          // url="https://www.youtube.com/watch?v=NVb5GV6lntU&ab_channel=PsychedelicTrips"
          // url="https://www.youtube.com/watch?v=gxxqdrrpgZc&ab_channel=poisonteddy%E0%A4%93%E0%A4%AE%E0%A5%8D"
          // url="https://youtu.be/FHVD9ft_ANw"
          // url="https://youtu.be/4oh7lct04Us"
          url="https://youtu.be/3pLWskANffo"
          // url="https://youtu.be/Os5qrLhHQd8"
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
          <h1>Hello, Word. I’m Amabelle.</h1>
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
          <h2 className="slide-in-left">A Web Developer</h2>
          <h2 className="slide-in-right">A user experience designer</h2>
          <h2 className="slide-in-left">An ideas actualizer</h2>
          <div className="home_btn">
            <Button to="/about">More about me</Button>
          </div>
        </div>

        <div className="gradient_to-clear home_project">
          <div className="home_projects_main">
            <h1 className="home_projects_main_title">My projects</h1>
            <div className="home_projects_main_list">
              <article>
                <a href="https://community-storages.web.app/">
                  <h3>Community Storages</h3>
                </a>
                <p>Mern-app for the managment of storages</p>
              </article>
              <article>
                <a href="https://live-chat-24679.web.app/">
                  <h3>Live Chat</h3>
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
          <h3>My Blog - Under construction..</h3>
          <Button to="/blog">My blog</Button>
        </div>
        <div className="gradient_to-black home_fotter">
          <h3>on the search for my next chanllegne 🤑</h3>
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
