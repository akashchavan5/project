import React from "react";
import "./Education.css";
import module from "../Data/Education.json";

const Education = () => {
  return (
    <div id="educationn">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <ul className="nav nav-tabs" data-aos="fade-down">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#internship">
                  Internship
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="education">
                {module.map((item, i) => (
                  <div className="educationblock" key={i}>
                    <div className="row" key={i}>
                      <div className="col-sm-5">
                        <h5 data-aos="fade-right">
                          {item.coursename} - {item.courseyear}
                        </h5>
                      </div>
                      <div className="col-sm-7">
                        <div className="educationright">
                          <h5 data-aos="fade-left">{item.institute} </h5>
                          <h6 data-aos="fade-left"> {item.grade}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tab-pane fade" id="internship">
                <div className="educationblock">
                  <div className="row">
                    <div className="col-sm-4">
                      <h5 data-aos="fade-right">Jan, 2019 - May, 2021</h5>
                    </div>
                    <div className="col-sm-8">
                      <div className="educationright" data-aos="fade-left">
                        <h5>-Universal Industries Pvt Limited</h5>
                        <h6>Project - "Gyro Vehicle with Flexible Chassis."</h6>

                        <h5>-Innovative Automation Products Pvt Limited</h5>
                        <h6>
                          Project - "Tracking of solar rays by solar panels
                          using hydraulic system"
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
