import React from "react";
import "../App.css";

const About = () => {
  return (
    <>
      <div className="about">
        <h1 style={{ textAlign: "center", marginTop: 20 }}>About Me</h1>
        <div className="about__section">
          <div className="about__profile">
            <img src="../about.png" alt="" />
          </div>
          <div className="about__intro">
            <div className="about__introduction">
              <p
                style={{
                  background: "orange",
                  width: "fit-content",
                  borderRadius: 6,
                  padding: 3,
                  color: "white",
                  marginBottom: 5,
                }}
              >
                About Me
              </p>
              <p>
                Meet Amresh, a talented web developer with a passion for
                crafting elegant and functional digital solutions. Armed with
                expertise in HTML,CSS, JavaScript, React Js and more, Their keen
                eye for detail,coupled with theircommitment to staying abreast
                of industry trends,ensures that every project they undertake is
                not only visually stunning but also optimizedfor peak
                performance.
              </p>
            </div>
            <div className="hobby__section">
              <h1>My Hobby</h1>
              <p><img width="24" height="24" src="https://img.icons8.com/emoji/48/cricket-game-emoji.png" alt="cricket-game-emoji"/>Playing Cricket</p>
            </div>
            <div className="language__section">
              <h1>Language</h1>
              <p>English</p>
              <p>Hindi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
