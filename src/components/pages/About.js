import React from 'react';
import profile from '../../images/profile-pic.png';
export default function About() {
  return (
    <div className="row">
      <div>
        <div className="card mb-3 border-0">
          <div className="row g-4">
            <div className="col-md-6 col-lg-5">
              <img src={profile} className="img img-fluid custom-shadow" alt="paolo garde" />
            </div>
            <div className="card-body col-md-6 col-lg-7">
              <div>
                <h1 className="fw-bold text-large">PAOLO GARDE</h1>
                <h3>Startup Enthusiast</h3>
                <p className="mt-4">
                  I&apos;m currently a full-stack software engineer at :Different, an Australian
                  Property Tech startup. Before getting into the exciting world of development, I
                  had 8 years of Ops leadership experience in startups like Uber, FoodByUs, and
                  :Different.
                </p>
                <p className="mt-2">
                  My focus has been on <span className="fw-bold">Web Development</span> featuring{' '}
                  <span className="fw-bold">React, Typescript, GraphQL,</span> and both{' '}
                  <span className="fw-bold">SQL</span> and{' '}
                  <span className="fw-bold">NoSQL (MongoDB)</span> databases. In 2021, I finished up
                  a coding bootcamp at The University of Sydney, where I graduated with an A+
                  average.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
