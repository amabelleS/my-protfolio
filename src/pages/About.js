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
  'Self taught',
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
        <div className="gradient_from-black">
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.molasses}
            className="about-text"
          />
          <p className="about-main">
            With a background as a cognitive psychologist, I’m all about the
            user-experience. I'm passionate to build and design web applications
            that will provide us, as individuals and as the community online
            spaces that will help us manage ourselves, share knowledge, and
            build together sustainable communities. So, I started to learn how
            to code:) First with the help of the wonderful community SHECODES,
            but mostly self-taught. About a half-year ago or more, I finished a
            front-end development course, then took an internship, and continued
            to educate myself with new technologies that I praioteriez (so much
            to choose from){' '}
          </p>
        </div>

        <div className="gradient_static-shade">
          <h1>
            <TextTransition
              text={TEXTS_2[index % TEXTS_2.length]}
              springConfig={presets.slow}
              className="about-text"
            />
          </h1>
        </div>
        <div className="gradient_to-clear about_exp">
          <h4>
            <TextTransition
              text={TEXTS_3[index % TEXTS_3.length]}
              springConfig={presets.slow}
              className="about-text_exp"
            />
          </h4>
          <article className="about_exp_article">
            <h3>
              2020-3/2021 <span>Web developer</span> Willing app, Tel-aviv.
            </h3>
            <p>
              Building the dashboard for the managment front/react.js app of
              WillingApp - A free, social application for matches between ppl in
              need, and ppl who can help. Implemented BOOTSTRAP date-picker, as
              the user chooses the date-range, calling the server for data for
              that range. Also implemented canvas.js - wrote it as a functional
              component, that renders the data received from the server upon
              loading, according to an API call. As there is no global state for
              this app, I used useReducer for the state managment.
            </p>
          </article>
          <article className="about_exp_article">
            <h3>
              2019-6/2020 <span>Front-End Web development</span> SVcollage,
              Tel-aviv.
            </h3>
            <p>
              Implemented during the course by small web-apps with Html, CSS,
              JavaScript and react.
            </p>
          </article>
          <article className="about_exp_article">
            <h3>
              2016-now <span>Web developer</span> SheCodes, Udemy, The Web...
            </h3>
            <p>
              Since the course ended, I’ve been learning from the web the
              back-end: node.js, mongoDB, express, react, redux, mob-x,
              react-query and other state management tools. I have implemented
              charts in the internship, directed graphs on a side project, and
              learned vue.js in a few days. I would really love to find a place
              where my capabilities will come at hand:) Next steps, Docker &
              Kubernetes. Or maybe typescript and Anjular?
            </p>
          </article>
          <article className="about_exp_article">
            <h3>
              2015-2016 <span>Occupational psychologist</span> Keinan-Shefi,
              Tel-Aviv.
            </h3>
            <p>
              Personal interviews, group dynamic tests, evaluation days for
              government positions, and final evaluation reports.
            </p>
          </article>
          <article className="about_exp_article">
            <h3>
              2009-2012 <span>Research Assistant</span> Haifa Univercity.
            </h3>
            <p>
              An international research, on eyewitness credibility. Summarizing
              and editing articles, administrations, statistical analyzing
              mostly with SPSS, and everything that needed to be done:)
            </p>
          </article>
        </div>

        <div className="gradient_clear">
          <div className={`disapearing-div ${isShowing ? `` : `hide-div`}`}>
            <h2>If you want to enjoy just the background</h2>
            <h3>A disapearing div</h3>
          </div>
          <Button onClick={() => setIsShowing(!isShowing)}>
            {isShowing ? 'Hide' : 'Show'}
          </Button>
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
          {/* <a href={pdfUrl} target="_blank">
            Download Pdf
          </a> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
