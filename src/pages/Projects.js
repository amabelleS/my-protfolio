import React from 'react';

// import ImageSlider from '../shared/components/UIElements/slider/ImageSlider';
import './Projects.css';

import dashbourdUrl from '../assets/dashboad.jpg';
import storagesItems from '../assets/items.png';
// const Images = [dashbourdUrl];

const projects = [
  { name: 'Internship', src: dashbourdUrl },
  { name: 'Storages', src: storagesItems },
];

const Projects = () => {
  // const [images, setImages] = React.useState(Images);
  return (
    <React.Fragment>
      <div className="projects_content-wrapper">
        <div className="project_dashboard">
          <img
            className="logo"
            src={dashbourdUrl}
            alt="dashbourd"
            // height={200}
            // width={200}
          />
        </div>
        <div className="project_storages">
          <img src={storagesItems} alt="storages" />
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
