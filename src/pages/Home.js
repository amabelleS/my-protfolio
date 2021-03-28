import React from 'react';

import ReactPlayer from 'react-player';

const Home = () => {
  return (
    <React.Fragment>
      <div style={{ height: '100vh' }}>
        {/* <div style={{ marginTop: '4rem' }}></div> */}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Ach8lgF6-AY&ab_channel=KOANSound"
          className="react-player"
          playing={true}
          muted={true}
          width="100%"
          height="100%"
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
