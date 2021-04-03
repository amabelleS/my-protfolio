import React from 'react';

import ProjectsList from '../shared/components/projects/ProjectsList';
// import ImageSlider from '../shared/components/UIElements/slider/ImageSlider';
import './Projects.css';

import dashbourdUrl from '../assets/dashboad.jpg';
import storagesItems from '../assets/items.png';

const projects = [
  {
    name: 'Storages',
    src: storagesItems,
    discription: 'Community storages',
    url: 'https://community-storages.web.app/',
  },
  {
    name: 'Internship',
    src: dashbourdUrl,
    discription: 'Community storages',
    url: null,
  },
];

const Projects = () => {
  // const [images, setImages] = React.useState(Images);
  return (
    <React.Fragment>
      <div className="projects_content-wrapper">
        <ProjectsList />
        <div className="project project_storages">
          <div className="projects_img_container">
            <img src={projects[0].src} alt="dashbourd" />
          </div>
          <div className="projects_info">
            <h1>{projects[0].name}</h1>
            <h3 className="projects_info_subtitle">
              {projects[0].discription}
            </h3>
            <a href={projects[0].url}>{projects[0].name}</a>
          </div>
        </div>

        <div className="project project_dashboard">
          <div className="projects_img_container">
            <img src={projects[1].src} alt="storages" />
          </div>
          <div className="projects_info">
            <h1>{projects[1].name}</h1>
            <h3 className="projects_info_subtitle">
              {projects[1].discription}
            </h3>
            <a href={projects[1].url}>{projects[1].name}</a>
          </div>
        </div>
      </div>
    </React.Fragment>
    // <div style={{ marginTop: '6rem', width: '100%', height: '100%' }}>
    //   <h1>Slider</h1>
    //   <ImageSlider images={images} />
    // </div>
  );
};

export default Projects;
