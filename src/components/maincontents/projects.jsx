import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"; // <-- added import

export default function ProjectsSection() {
  const { projects } = useSelector((state) => state.siteContent);

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="bg-dark container-fluid p-1 mb-5">
        <h2 className="text-center text-light">{projects.heading}</h2>
      </div>


      <div className="container">
        {/* Mobile Slider */}
        <div className="d-md-none">
          <div
            className="d-flex overflow-auto px-2"
            style={{
              gap: "1rem",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {projects.items.map((project) => (
              <div
                key={project.id}
                className="card shadow-sm border-0.5 border-dark flex-shrink-0 d-flex flex-column"
                style={{
                  width: "85%",
                  scrollSnapAlign: "start",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <h5 className="fw-bold">{project.title}</h5>
                  <p className="text-muted flex-grow-1">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark mt-auto"
                    >
                      View Details
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="row g-4 d-none d-md-flex">
          {projects.items.map((project) => (
            <div key={project.id} className="col-12 col-sm-6 col-lg-4 d-flex">
              <div className="card h-100 shadow-sm border-0.5 border-dark d-flex flex-column">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body flex-grow-1 d-flex flex-column">
                  <h5 className="fw-bold">{project.title}</h5>
                  <p className="text-muted flex-grow-1">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark mt-auto"
                    >
                      View Details
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
