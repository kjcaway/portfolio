import React from "react";
import './Projects.scss';

const Projects = props => {
  const renderItems = (data) => {
    return data.map((obj, idx) => {
      return (
        <article key={idx}>
          <header>
            <h2>{obj.title}</h2>
          </header>
          <p>
            <div dangerouslySetInnerHTML={{__html: obj.contents}}></div>
          </p>
        </article>
      )
    })
  }
  return (
    <div className="main-container">
      {renderItems(props.data)}
    </div>
  );
};

export default Projects;
