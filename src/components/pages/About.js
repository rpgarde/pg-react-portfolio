import React from 'react';
import profile from '../../images/profile-pic.png'
export default function About() {
  return (
    <div className = "row">
      <div>
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-6 col-lg-5">
              <img src={profile} className="img-fluid rounded-start" alt="paolo garde"/>
            </div>
            <div className="card-body col-md-6 col-lg-7">
              <div className="my-4">
                <h3>Hello there 👋</h3>
                <h1>I'm Paolo Garde.</h1>
                <h2>Web Developer</h2>
                <p className = "my-2">I come with over 8 years of Ops leadership experience in
                  tech startups like Uber, FoodByUs, and :Different. I've always been interested in the tech side and I've recently decided to make a career shift into the world of web development.</p>
                <p className = "my-2"> I'm finishing up a Coding Bootcamp at The University of Sydney, graduating November 2021. </p>
              </div>
            </div>
          </div>
        </div>
      </div>    
      </div>
  );
}
