import React from 'react';
import profile from '../images/profile-pic.png'
export default function About() {
  return (
    <div className = "row">
      <div>
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={profile} className="img-fluid rounded-start" alt="paolo garde"/>
            </div>
            <div className="card-body col-md-8">
              <div className="my-4">
                <h1>Hi 👋, I'm Paolo.</h1>
                <p className = "my-2">I'm a web developer with over 8 years of Ops leadership experience in
                  startups like Uber, FoodByUs, and :Different.</p>
                <p className = "my-2"> I'm finishing up a Coding Bootcamp at The University of Sydney, graduating November 2021. </p>
              </div>
            </div>
          </div>
        </div>
      </div>    
      </div>
  );
}
