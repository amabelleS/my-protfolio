import React, { useState } from 'react';

import ReactPlayer from 'react-player';
import TextTransition, { presets } from 'react-text-transition';

import Button from '../shared/components/FormElements/Button';

import './About.css';

const TEXTS = ['Creativity', 'Inovation', 'Cooperation', 'Perfection'];

const About = () => {
  const [index, setIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <React.Fragment>
      <div className="player-background">
        <ReactPlayer
          // url="https://www.youtube.com/watch?v=Ach8lgF6-AY&ab_channel=KOANSound"
          url="https://www.youtube.com/watch?v=_hHwz1UWJmI&ab_channel=%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%D0%B4%D0%BB%D1%8F%D0%94%D1%83%D1%88%D0%B8"
          className="react-player"
          playing={true}
          muted={isMuted}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>

      <div className="content-wrapper">
        <div className="about_first">
          {/* <h1></h1> */}
          <h1>
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.molasses}
              className="about-text"
            />
          </h1>
          <p className="about-main">
            With a background as a cognitive psychologist, I’m all about the
            user-experience. I'm passionate to build and design web applications
            that will provide us, as individuals and as the community online
            spaces that will help us manage ourselves, share knowledge, and
            build together sustainable communities. So, I started to learn how
            to code:) First with the help of the wonderful community SHECODES,
            but mostly self-taut. About a half-year ago or more, I finished a
            front-end development course, then took an internship, and continued
            to educate myself with new technologies that I praioteriez (so much
            to choose from){' '}
          </p>
          {/* <div className="home_btn">
            <Button
              onClick={() => setIsMuted(!isMuted)}
              inverse
              className="home_mute"
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </Button>
          </div> */}
        </div>

        <div className="about_first"></div>

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

      {/* <div className="content_wrapper">
        <div className="about_first">
          <h1>Hi, I'm Amabelle.</h1>
          <h1>
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.molasses}
            />
          </h1>
          <h2>I'm a web developer.</h2>

          <p className="about-main">
            Background as a cognitive psychologist, so I’m all about the
            user-experience. With passion to build and design web applications
            that will provide us, as individuals and as the community online
            spaces that will help us manage ourselves, share knowledge, and
            build together sustainable communities. So, I started to learn how
            to code:) First with the help of the wonderful community SHECODES,
            but mostly self-taut. About a half-year ago or more, I finished a
            front-end development course, then took an internship, and continued
            to educate myself with new technologies that I praioteriez (so much
            to choose from){' '}
          </p>
        </div>
        <div className="about_second">
          <h1>
            r-experience. With passion to build and design web applications that
            will provide us, as individuals and as the community online spaces
            that will help us manage ourselves, share knowledge, and build
            together sustainable communities. So, I started to learn how to
            code:) First with the...
          </h1>
        </div>
      </div>
   */}
    </React.Fragment>
  );
};

export default About;
