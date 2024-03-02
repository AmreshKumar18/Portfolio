import React from "react";

const Projects = () => {
  return (
    <>
      <div className="project__section">
        <h1>Projects</h1>
        <div className="project__card">
          <div className="project">
            <img src="../project1.jpg" alt="" />
            <p style={{ fontWeight: "bold", margin: 5, fontSize: 18 }}>
              Blog Website
            </p>
            <div className="project_link">
              <a href="#">View</a>
              <a href="#">Know More</a>
            </div>
          </div>
          <div className="project">
            <img src="../project2.jpg" alt="" />
            <p style={{ fontWeight: "bold", margin: 5, fontSize: 18 }}>
              Blog Website
            </p>
            <div className="project_link">
              <a href="#">View</a>
              <a href="#">Know More</a>
            </div>
          </div>
          <div className="project">
            <img src="../project1.jpg" alt="" />
            <p style={{ fontWeight: "bold", margin: 5, fontSize: 18 }}>
              Blog Website
            </p>
            <div className="project_link">
              <a href="#">View</a>
              <a href="#">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
