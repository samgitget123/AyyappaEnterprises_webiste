import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";

export default function TeamSection() {
//  const { team } = useSelector((state) => state.team); // coming from teamSlice
const { team } = useSelector((state) => state.siteContent);

  return (
    <section id="team" className="py-5 bg-white">
        <div className="bg-dark container-fluid p-1 mb-5">
          <h2 className="text-center  text-light">{team.heading}</h2>
      </div>
      <div className="container">
    

        {/* Mobile View: Carousel */}
        <div className="d-block d-md-none">
          <Carousel fade interval={4000} indicators={false} controls pause={false}>
            {team.members.map((member) => (
              <Carousel.Item key={member.id} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle shadow-sm mb-3"
                  style={{ width: "180px", height: "180px", objectFit: "cover",  border: "2px solid black" }}
                />
                <h5 className="fw-bold">{member.name}</h5>
                <p className="text-muted mb-1">{member.role}</p>
                <p className="small">{member.description}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Tablet & Desktop View: Grid */}
        <div className="row g-4 d-none d-md-flex">
          {team.members.map((member) => (
            <div key={member.id} className="col-12 col-sm-6 col-lg-4 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-circle shadow-sm mb-3"
                style={{ width: "200px", height: "200px", objectFit: "cover",  border: "2px solid black" }}
              />
              <h5 className="fw-bold">{member.name}</h5>
              <p className="text-muted mb-1">{member.role}</p>
              <p className="small">{member.description}</p>
              {/* Optional socials */}
              <div className="d-flex justify-content-center gap-3 mt-2">
                {member.social?.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                )}
                {member.social?.twitter && (
                  <a href={member.social.twitter} target="_blank" rel="noreferrer">
                    <i className="bi bi-twitter fs-5"></i>
                  </a>
                )}
                {member.social?.instagram && (
                  <a href={member.social.instagram} target="_blank" rel="noreferrer">
                    <i className="bi bi-instagram fs-5"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
