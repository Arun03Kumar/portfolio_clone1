import React from "react";

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
      <div className="moreBtn">More work</div>
    </div>
  );
};

export default Projects;
