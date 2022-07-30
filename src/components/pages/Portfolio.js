import React from 'react';
import Project from '../Project';
// import images
import projects from '../../data/projects';

export default function Portfolio() {
  return (
    <div>
      <h1 className="text-center mb-3 fw-bold">Some of my favourite projects.</h1>
      <div className="d-flex flex-wrap justify-content-evenly">
        {projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            description={project.description}
            tech={project.tech}
            deployed={project.deployed}
            repo={project.repo}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
