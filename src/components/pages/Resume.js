import React from 'react';
import resume from '../../images/paolo-garde-cv-sep2021.pdf'

export default function Resume() {
  return (
      <div className = "col-8 offset-2">
    <div className = "text-center row">
        <h1 className = "fw-bold">Download my resume</h1>
        <div>
        <a href = {resume} target = "_blank" rel = "noreferrer" className = "btn btn-dark my-4">Click me</a>
        </div>
    </div>
    <hr/>
    <div>
        <h1 className = "text-center my-3 fw-bold">My skills</h1>
    </div>
    <div className = "row d-flex justify-content-center">
        <div className = "col-md-5 offset-1">
            <h3 className = "text-center my-2">front-end</h3>
            <ul className = "list-group list-group-flush">
                <li className = "list-group-item d-flex justify-content-between align-items-center">
                    HTML
                <span class="badge bg-dark rounded-pill">A</span>
                </li>
                <li className = "list-group-item d-flex justify-content-between align-items-center">
                    CSS
                    <span class="badge bg-dark rounded-pill">B+</span>
                    </li>
                <li className = "list-group-item d-flex justify-content-between align-items-center">
                    Javascript
                    <span class="badge bg-dark rounded-pill">A</span>
                    </li>
                <li className = "list-group-item d-flex justify-content-between align-items-center">
                    React
                    <span class="badge bg-dark rounded-pill">B</span>
                    </li>
                <li className = "list-group-item d-flex justify-content-between align-items-center">
                    Bootstrap
                    <span class="badge bg-dark rounded-pill">A</span>
                    </li>
            </ul>
        </div>
        <div className = "col-md-5 offset-1">
        <h3 className = "text-center my-2">back-end</h3>
        <ul className = "list-group list-group-flush">
                <li className = "list-group-item d-flex justify-content-between align-items-center">
                    Node.js
                <span class="badge bg-dark rounded-pill">A</span>
                </li>
                <li className = "list-group-item d-flex justify-content-between align-items-center">
                    Express
                <span class="badge bg-dark rounded-pill">A</span>
                </li>
                <li className = "list-group-item d-flex justify-content-between align-items-center">
                    MySQL
                <span class="badge bg-dark rounded-pill">A+</span>
                </li>
                <li className = "list-group-item d-flex justify-content-between align-items-center">
                    MongoDB
                <span class="badge bg-dark rounded-pill">A</span>
                </li>
            </ul>
        </div>

    </div>
    </div>
  );
}
