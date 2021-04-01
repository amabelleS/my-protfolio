import React, { useState } from 'react';

import ReactPlayer from 'react-player';

import Button from '../shared/components/FormElements/Button';

// import styled, { keyframes } from 'styled-components';
// import { bounceInLeft } from 'react-animations';
// import './styled.css';

import './Home.css';

// const bounceInLeftAnimation = keyframes`${bounceInLeft}`;
// const bounceInLeftDiv = styled.div`
//   animation: 1s ${bounceInLeftAnimation};
// `;

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <React.Fragment>
      <div className="player-background">
        {/* <div className="video-foreground"> */}
        {/* <div style={{ marginTop: '4rem' }}></div> */}

        <ReactPlayer
          // url="https://www.youtube.com/watch?v=Ach8lgF6-AY&ab_channel=KOANSound"
          url="https://www.youtube.com/watch?v=NVb5GV6lntU&ab_channel=PsychedelicTrips"
          className="react-player"
          playing={true}
          muted={isMuted}
          width="100%"
          height="100%"
          controls={true}
        />
        {/* </div> */}
      </div>
      <div className="content-wrapper">
        {/* <div className="first">
          <h3>Hover over me </h3>
        </div> */}
        <div className="home_hello">
          <h1 className="enter-down">Hello, Word. I’m Amabelle.</h1>
          {/* <h2>A Web Developer</h2>
          <h2>A user experience designer</h2>
          <h2>An ideas actualizer</h2> */}
          <div className="home_btn">
            {/* <Button to="/about">More about me</Button> */}
            <Button
              // style={{ background: 'white' }}
              onClick={() => setIsMuted(!isMuted)}
              inverse
              className="home_mute"
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </Button>
          </div>
        </div>

        <div className="home_about">
          <h2 className="">A Web Developer</h2>
          <bounceInLeftDiv>
            <h2 className="">A user experience designer</h2>
          </bounceInLeftDiv>
          <h2 className="">An ideas actualizer</h2>
          <div className="home_btn">
            <Button to="/about">More about me</Button>
          </div>
        </div>

        {/* <div className="second">Hoo</div> */}
        <div className="home_project">
          <h3>My projects</h3>
          <Button to="/projets">My projects</Button>
        </div>
        <div className="second">
          <h3>Spesielized in ui/ux </h3>
        </div>
        <div className="home_fotter">
          <h3>on the search for my next chanlege 🤑</h3>
          <img
            alt="my avater"
            src="https://avatars.githubusercontent.com/u/45571546?v=4"
            style={{
              clipPath: 'circle(50% at 50% 50%)',
              maxWidth: '50vw',
              maxHeight: '50vh',
            }}
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
