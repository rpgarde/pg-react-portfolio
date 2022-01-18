import React from 'react';
import Tool from './Tool';

function Project(props) {
    console.log(props)
    return (
        <div className="card m-3 project-card border-0 shadow">
            <a href={props.deployed}>
                <img src={props.image} className="card-img-top" alt={props.name} />
            </a>
            <div className="card-body">
                <h5 className="card-title fw-bold">{props.name}</h5>
                <p className="card-text">{props.tech.map((techItem, index) =>
                    <Tool techItem={techItem} key = {index} />
                    )} </p>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-body">
                <a href={props.repo} className="btn btn-dark rounded-pill mx-1">Repo ▶</a>
                <a href={props.deployed}
                    className="btn btn-dark rounded-pill mx-1">Deployed site ▶</a>
            </div>
        </div>
    )
}

export default Project