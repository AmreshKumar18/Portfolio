import React from "react";

const Education = () => {
  return (
    <>
      <div className="educational">
        <h1 style={{ textAlign: "center" }}>Education</h1>
        <div className="education__section">
          <div className="education">
            <p>
              <b>Chandigarh University, Mohali, Punjab</b>
            </p>
            <p>
              <span>2021-2025</span>
            </p>
            <p>3rd Year, 7.54 CGPA</p>
          </div>
          <div className="education">
            <p>
              <b>Central Public School, Chapra, Bihar</b>
            </p>
            <p>
              <span>2021</span>
            </p>
            <p>12th (Intermediate), 70.2%</p>
          </div>
          <div className="education">
            <p>
              <b>Central Public School, Chapra, Bihar</b>
            </p>
            <p>
              <span>2019</span>
            </p>
            <p>10th (Matriculation), 85%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
