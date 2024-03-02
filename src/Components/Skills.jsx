import React from "react";
import "../App.css";

const Skills = () => {
  return (
    <>
      <div className="skills__section">
        <h1 style={{textAlign: "center"}}>Skills</h1>
        <div className="skills__component">
          <div className="skills__name">
            <div className="skills__set">
              <p>HTML</p>
              <div className="progress__bar">
                <div className="html">
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div className="skills__set">
              <p>CSS</p>
              <div className="progress__bar">
                <div className="css">
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="skills__set">
              <p>Bootstrap</p>
              <div className="progress__bar">
                <div className="bootstrap">
                  <span>90%</span>
                </div>
              </div>
            </div>
            <div className="skills__set">
              <p>React Js</p>
              <div className="progress__bar">
                <div className="react">
                  <span>70%</span>
                </div>
              </div>
            </div>
            <div className="skills__set">
              <p>Javascript</p>
              <div className="progress__bar">
                <div className="javascript">
                  <span>60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
