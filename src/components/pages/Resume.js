import React from 'react';
import { Skill } from './Skill';
import { frontEnd,backEnd } from '../../data/skills';

const resume = 'https://docs.google.com/document/d/1kmN3iH0xwdpJ9WyoGLqLgsVbmCeeh43h51XxHazOv5o'

export default function Resume() {
    return (
        <div className="col-8 offset-2">
            <div className="text-center row">
                <h1 className="fw-bold">View my resume</h1>
                <div>
                    <a href={resume} target="_blank" rel="noreferrer" className="btn btn-dark my-4 rounded-pill">Click me ▶</a>
                </div>
            </div>
            <hr />
            <div>
                <h1 className="text-center my-3 fw-bold">My skills</h1>
            </div>
            <div className="row d-flex justify-content-center mb-3">
                <div className="col-md-5 offset-1">
                    <h3 className="text-center my-2">front-end</h3>
                    <ul className="list-group list-group-flush">
                        {
                            frontEnd.map((skill) => (
                                <Skill skill={skill.skill} rating={skill.rating} />
                            ))
                        }
                    </ul>
                </div>
                <div className="col-md-5 offset-1">
                    <h3 className="text-center my-2">back-end</h3>
                    <ul className="list-group list-group-flush">
                        {
                            backEnd.map((skill) => (
                                <Skill skill={skill.skill} rating={skill.rating} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
