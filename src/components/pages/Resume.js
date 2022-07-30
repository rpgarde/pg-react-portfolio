import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faServer, faToolbox } from '@fortawesome/free-solid-svg-icons';

const resume =
  'https://docs.google.com/document/d/e/2PACX-1vTy_Fzr2DLAlFu0NBYzTXMljszsMqxD6DETowGNeHIoLpBtLzmySH0AnTftvby5kXzQssWH4UckIpHv/pub';

export default function Resume() {
  return (
    <div>
      <div className="my-3 d-flex flex-column align-items-center">
        <h1 className="text-center fw-bold mb-3">What I can do (so far)</h1>
        <p className="col-md-9">
          I currently work with a React/ Typescript front-end and a GraphQL/ MongoDB back-end,
          though I do love a good REST API! I&apos;m upskilling on React Native which we use for
          mobile development, and who knows what else I&apos;ll pick up along the way.
        </p>
      </div>
      <div className="row d-flex justify-content-center m-3">
        <div className="col-md-3 border-all-thin custom-shadow m-2">
          <div className="text-center my-2">
            <FontAwesomeIcon icon={faPalette} size="3x" />
          </div>
          <h3 className="text-center my-2 fw-bold"> front-end</h3>
          <p className="text-center">HTML, CSS, Javascript, React, Typescript, Sass, Bootstrap</p>
        </div>
        <div className="col-md-3 border-all-thin custom-shadow m-2">
          <div className="text-center my-2">
            <FontAwesomeIcon icon={faServer} size="3x" />
          </div>
          <h3 className="text-center my-2 fw-bold"> back-end</h3>
          <p className="text-center">Node.js, Express, GraphQL, REST APIs, MongoDB, MySQL</p>
        </div>
        <div className="col-md-3 border-all-thin custom-shadow m-2">
          <div className="text-center my-2">
            <FontAwesomeIcon icon={faToolbox} size="3x" />
          </div>
          <h3 className="text-center my-2 fw-bold">misc tools</h3>
          <p className="text-center">Github, Slack, ClickUp, Docker, AWS S3, Heroku</p>
        </div>
      </div>
      <div className="text-center row">
        <div>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="btn text-white background-blue my-3 border-all-bold move">
            Click to see my full CV ▶
          </a>
        </div>
      </div>
    </div>
  );
}
