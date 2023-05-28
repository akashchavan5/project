import React from "react";
import "./Module.css";
import module from "../Data/Module.json";

const Module = () => {
  return (
    <div id="module" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <h2 className="text-center">What I do</h2>
            <br />
          </div>
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              {module.map((item, i) => (
                <div className="col-sm-4" key={i}>
                  <div className="modulebox" data-aos="fade-zoom-in">
                    <img
                      src={item.imgg}
                      alt="moduleimg"
                      className="img-fluid"
                    />
                    <h4>{item.modulename}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;
