import React from 'react';
import Tag from './Tag';
import PropTypes from 'prop-types';

function Project(props) {
  return (
    <div className="card m-3 project-card border-2 border-dark custom-shadow">
      <a href={props.deployed}>
        <div className="card-mask">
          <div className="card-mask-text">
            <span>View deployed site</span>
          </div>
          <img src={props.image} className="card-img-top" alt={props.name} />
        </div>
      </a>
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.name}</h5>
        <p className="card-text">
          {props.tech.map((techItem, index) => (
            <Tag tagName={techItem} key={index} />
          ))}{' '}
        </p>
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-body">
        <a href={props.repo} className="btn text-white background-blue border-all-bold mx-1 move">
          Repo ▶
        </a>
        <a
          href={props.deployed}
          className="btn text-white background-blue border-all-bold mx-1 move">
          Deployed site ▶
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  tech: PropTypes.array,
  deployed: PropTypes.string,
  repo: PropTypes.string,
  image: PropTypes.any
};

export default Project;
