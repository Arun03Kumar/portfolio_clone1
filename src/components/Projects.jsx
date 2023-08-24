import React from "react";
import Magnet from "./Magnet";

const Projects = () => {
  const name = ["FABRIC", "Aanstekelijk", "Base Create", "AVVR"];
  return (
    <div className="projectsParent">
      {name.map((n, i) => (
        <div className="projectsMain">
          <p>{n}</p>
          <p>Design & Development</p>
        </div>
      ))}
      <Magnet>
      <div className="moreBtn">More work</div>
      </Magnet>
    </div>
  );
};

export default Projects;
