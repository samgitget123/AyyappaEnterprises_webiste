import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phone = "919848851443"; // Your WhatsApp number
    const msg = `📩 New Lead Submission:\n${Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank"); // opens WhatsApp chat in new tab/app

    // Optional: reset form
    setFormData({ name: "", contact: "", service: "", description: "" });

    // Optional: show a small confirmation to user
    alert("Thank you! Your details have been received. Our team will contact you shortly.");
  };

  return (
    <section id="contact" className="py-5 bg-light">
        <div className="bg-dark p-1 mb-5 container-fluid">
          <h2 className="text-center text-light">Contact Us</h2>
      </div>
      <div className="container">
    
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow-sm border border-dark rounded shadow-sm p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label ">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                     style={{ border: "0.25px solid black" }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label ">Contact Number</label>
                  <input
                    type="text"
                    name="contact"
                    className="form-control"
                    placeholder="Enter your contact number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                     style={{ border: "0.25px solid black" }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label ">Type of Service</label>
                  <select
                    name="service"
                    className="form-select"
                    value={formData.service}
                    onChange={handleChange}
                    required
                     style={{ border: "0.25px solid black" }}
                  >
                    <option value="">Select a service</option>
                    <option value="Interiors">Interiors</option>
                    <option value="Construction">Construction</option>
                    <option value="Exteriors">Exteriors</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label ">Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder="Enter any additional details"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                     style={{ border: "0.25px solid black" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 py-2 "
                >
                  Lets connect in watsapp!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile tweaks */}
      <style jsx>{`
        @media (max-width: 576px) {
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
