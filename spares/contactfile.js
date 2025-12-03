import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ServicesSection() {
  const { services } = useSelector((state) => state.siteContent);
  const [activeServiceId, setActiveServiceId] = useState(
    services.items[0]?.id || null
  );

  const activeService = services.items.find(
    (s) => s.id === activeServiceId
  );

  return (
    <section id="services" className="py-5 ">
       <div className="bg-dark container-fluid p-1 mb-5" style={{ backgroundColor: "rgba(0,0,0,0.75)" }}>
         <h2 className="text-center  text-light">{services.heading}</h2>
       </div>
      <div className="container">
     
        {/* Tabs as grid */}
        <div className="row g-2 mb-4">
          {services.items.map((service) => (
            <div
              key={service.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <button
                onClick={() => setActiveServiceId(service.id)}
                className={`w-100 btn py-2 ${
                  activeServiceId === service.id
                    ? "btn-dark"
                    : "btn-outline-dark"
                }`}
              >
                <i className={`${service.icon} me-2`}></i>
                {service.title}
              </button>
            </div>
          ))}
        </div>

        {/* Active Service Content */}
        {activeService && (
          <div className="card shadow-sm  border-0.5 border-dark p-4">
            <h4 className="fw-bold">{activeService.title}</h4>
            <p className="text-muted">{activeService.description}</p>
            {activeService.details && (
              <div className="mt-3">{activeService.details}</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
