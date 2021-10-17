import React from 'react';
import Project from './Project'

const projects = [
  {
    name:"Granny Crush",
    description:"A dating app for seniors",
    tech: "HTML,CSS,Javascript",
    deployed:"https://github.com",
    repo: "https://github.com",
    image: "image"
  },
  {
    name:"Project 1 COVID stats",
    description:"COVID stats",
    tech: "HTML,CSS,Javascript",
    deployed:"https://github.com",
    repo: "https://github.com",
    image: "image"
  }
]

export default function Portfolio() {
  return (
    <div>
      <h1>Here's my portfolio</h1>
      {projects.map((project)=>(
      <Project 
      name = {project.name}
      description = {project.description}
      tech = {project.tech}
      deployed = {project.deployed}
      repo = {project.repo}
      image = {project.image}
      />
      ))}
    </div>
  );
}
