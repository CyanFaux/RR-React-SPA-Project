import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top border-bottom border-body" data-bs-theme="dark" style={{ backgroundColor: '#282c34' }}>
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link" href="#">
        <img
          src="/logo192.png"
          alt="Spinning React Logo"
          width="40"
          height="40"
          className="d-inline-block align-text-top App-logo"
        />
        </a>
        </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
