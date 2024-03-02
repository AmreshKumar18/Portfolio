import React from "react";
import "../App.css";
const Header = () => {
  return (
    <>
      <div className="header__section">
        <div className="intro__section">
          <p>Amresh Kumar</p>
          <h1>
            Hello, My name is <span>Amresh Kumar</span>
          </h1>
          <p>
            A creative and goal- oriented graduate possessing excellent
            communication, problem-solving and leadership skills seeking to
            secure to position of challenge and responsibility while managing
            key projects
          </p>
          <div className="download__section">
            <div className="cv__sec">
              <a href="#">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/windows/32/download--v1.png"
                  alt="download--v1"
                />
                Download CV
              </a>
            </div>
            <div className="mail__btn">
              <a href="mailto:masteryoda@starwars.com">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/fluency/48/mail--v1.png"
                  alt="mail--v1"
                />
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="profile__photo">
          <img src="../profile.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
