import React, { useState } from 'react';

import ReactPlayer from 'react-player';

import Button from '../shared/components/FormElements/Button';

import './Home.css';

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
        <div className="first">
          <h1>Hi! I am Amabelle</h1>
          <h2>A front End Web Developer</h2>
          <Button
            // style={{ background: 'white' }}
            onClick={() => setIsMuted(!isMuted)}
            inverse
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </Button>
        </div>

        {/* <div className="second">Hoo</div> */}
        <div className="second">
          <h3>A front End Web Developer</h3>
        </div>
        <div className="second">
          <h3>Spesielized in ui/ux </h3>
        </div>
        <div className="second">
          <h3>on the search for my next chanlege 🤑</h3>
          <img
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
