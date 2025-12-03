import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Header() {
   const { brand, navLinks } = useSelector((state) => state.siteContent);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-light  shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand  text-white" href="#">
          {brand}
        </a>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
 
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
