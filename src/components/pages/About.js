import React from 'react';
import profile from '../../images/profile-pic.png'
export default function About() {
  return (
    <div className = "row">
      <div>
        <div className="card mb-3 border-0">
          <div className="row g-4">
            <div className="col-md-6 col-lg-5">
              <img src={profile} className="img-fluid rounded" alt="paolo garde"/>
            </div>
            <div className="card-body col-md-6 col-lg-7">
              <div>
                <h3>Hello World 👋</h3>
                <h1 className = "fw-bold">I'm Paolo Garde.</h1>
                <h3>Software Engineer</h3>
                <p className = "mt-4">I'm currently a full-stack software engineer at :Different, an Australian Property Tech startup. Before getting into the exciting world of development, I had 8 years of Ops leadership experience in
                  startups like Uber and FoodByUs.</p>
                <p className = "mt-2">My focus has been on Javascript (front and back-end), but I'm always up to learn new things. I recently finished up a coding bootcamp at The University of Sydney, where I graduated with an A+ average. </p>
              </div>
            </div>
          </div>
        </div>
      </div>    
      </div>
  );
}
