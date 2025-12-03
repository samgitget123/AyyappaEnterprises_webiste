import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion"; // <-- Add import

export default function GallerySection() {
  const { gallery } = useSelector((state) => state.siteContent);

  return (
    <section id="gallery" className="py-5 bg-light">
       <div className="bg-dark container-fluid p-1 mb-5">
        <h2 className="text-center text-light">{gallery.heading}</h2>
      </div>

      <div className="container">
        {/* Mobile View: Animated Carousel */}
        <div className="d-block d-md-none">
          <Carousel fade interval={3000} indicators={false} controls={true} pause={false}>
            {gallery.images.map((img) => (
              <Carousel.Item key={img.id} className="gallery-slide">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="d-block w-100 rounded shadow-sm gallery-img"
                />
                <Carousel.Caption>
                  <p className="bg-dark bg-opacity-50 p-1 rounded small">{img.alt}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Tablet & Desktop View: Grid */}
        <div className="row g-4 d-none d-md-flex">
          {gallery.images.map((img) => (
            <div key={img.id} className="col-12 col-sm-6 col-lg-4">
              <img
                src={img.src}
                alt={img.alt}
                className="border border-dark rounded shadow-sm"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <p className="mt-2 text-center text-muted">{img.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
