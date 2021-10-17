import React from 'react';
import Project from './Project'
import grannyCrush from '../../images/granny-crush.png'
import covidStats from '../../images/covid-tracker.png'

const projects = [
  {
    name:"Granny Crush",
    description:"Our second group project. This is a full-stack dating site for seniors with match and chat functionality.",
    tech: "Javascript, Bulma, Node.js, Handlebars, Sequelize, Multer, Socket.io",
    deployed:"https://obscure-dusk-34538.herokuapp.com/",
    repo: "https://github.com/zahramertens/granny-crush",
    image: grannyCrush
  },
  {
    name:"COVID-19 Tracker",
    description:"Our first group project. This shows COVID stats globally and by country.",
    tech: "COVID-19 Stats API, Bulma",
    deployed:"https://rpgarde.github.io/project-1-covid-stats",
    repo: "https://www.github.com/rpgarde/project-1-covid-stats",
    image: covidStats
  },
  {
    name:"Granny Crush",
    description:"Our second group project. This is a full-stack dating site for seniors with match and chat functionality.",
    tech: "Javascript, Bulma, Node.js, Handlebars, Sequelize, Multer, Socket.io",
    deployed:"https://obscure-dusk-34538.herokuapp.com/",
    repo: "https://github.com/zahramertens/granny-crush",
    image: grannyCrush
  },
  {
    name:"COVID-19 Tracker",
    description:"Our first group project. This shows COVID stats globally and by country.",
    tech: "COVID-19 Stats API, Bulma",
    deployed:"https://rpgarde.github.io/project-1-covid-stats",
    repo: "https://www.github.com/rpgarde/project-1-covid-stats",
    image: covidStats
  },
  {
    name:"Granny Crush",
    description:"Our second group project. This is a full-stack dating site for seniors with match and chat functionality.",
    tech: "Javascript, Bulma, Node.js, Handlebars, Sequelize, Multer, Socket.io",
    deployed:"https://obscure-dusk-34538.herokuapp.com/",
    repo: "https://github.com/zahramertens/granny-crush",
    image: grannyCrush
  },
  {
    name:"COVID-19 Tracker",
    description:"Our first group project. This shows COVID stats globally and by country.",
    tech: "COVID-19 Stats API, Bulma",
    deployed:"https://rpgarde.github.io/project-1-covid-stats",
    repo: "https://www.github.com/rpgarde/project-1-covid-stats",
    image: covidStats
  }
]

export default function Portfolio() {
  return (
    <div>
      <h1>Here's my portfolio</h1>
      <div className = "d-flex flex-wrap justify-content-evenly">
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
    </div>
  );
}
