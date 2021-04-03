import React, { useState } from 'react';

import ReactPlayer from 'react-player';
import TextTransition, { presets } from 'react-text-transition';
import Button from '../shared/components/FormElements/Button';

// import Button from '../shared/components/FormElements/Button';

import './About.css';

const TEXTS = ['Creativity', 'Inovation', 'Cooperation', 'Perfection'];
const TEXTS_2 = [
  'Positivity',
  'Communication',
  'Efficiency',
  'Task Managment',
  'Fast Learner',
  'Self Tout',
  'Passion About New Technologies',
  'Team Player',
  'Big Picture Fucus',
  '..and Attention to Details',
];
const TEXTS_3 = [
  'HTML',
  'CSS',
  'JS',
  'React.js',
  'React Hooks',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Mongoose',
  'Git & gitHub',
  //   'GitHub',
  'Vue.js',
  'Typescript',
  'Firebase',
  'VSCode',
  'Canvas.js',
  'Directed graphs',
];

// const pdfUrl = './Amabelle_Trachtenberg_cv-2021.pdf';

const About = () => {
  const [index, setIndex] = useState(0);
  //   const [isMuted, setIsMuted] = useState(true);
  const [isShowing, setIsShowing] = useState(true);

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
          muted={true}
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

        <div className="about_skills">
          <h1>
            <TextTransition
              text={TEXTS_2[index % TEXTS_2.length]}
              springConfig={presets.slow}
              className="about-text"
            />
          </h1>
        </div>
        <div className="about_exp">
          <h4>
            <TextTransition
              text={TEXTS_3[index % TEXTS_3.length]}
              springConfig={presets.slow}
              className="about-text_exp"
            />
          </h4>
          <article className="about_exp_article">
            <h3>
              2020-3/2021 <span>Web developer</span>, Willing app, Tel-aviv.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
          <article className="about_exp_article">
            <h3>
              2020-3/2021 <span>Web developer</span>, Willing app, Tel-aviv.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
          <article className="about_exp_article">
            <h3>
              2020-3/2021 <span>Web developer</span>, Willing app, Tel-aviv.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </div>
        <div className="second">
          <h3>Spesielized in ui/ux </h3>
        </div>
        <div className="about-enjoy">
          <div className={`disapearing-div ${isShowing ? `` : `hide-div`}`}>
            <h2>If you want to enjoy just the background</h2>
            <h3>A disapearing div</h3>
          </div>
          <Button onClick={() => setIsShowing(!isShowing)}>
            {isShowing ? 'Hide' : 'Show'}
          </Button>
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
          {/* <a href={pdfUrl} target="_blank">
            Download Pdf
          </a> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
