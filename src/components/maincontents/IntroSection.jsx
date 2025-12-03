import React from 'react';
import { useSelector } from 'react-redux';
export default function IntroSection({ logo, heading, description }) {
  const { intro } = useSelector((state) => state.siteContent);
  return (
    <section id="home" className="bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-md-6 text-center  mb-md-0">
             <img
              src={intro.imageSrc}
              alt="Intro Logo"
              className="img-fluid w-100"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start">
            <h2 className="fw-bold display-5">{intro.title}</h2>
            <p className="text-muted fs-5">{intro.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
