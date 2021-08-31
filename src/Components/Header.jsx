import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand ms-1" to="/">
            <img
              className="d-inline-block align-text-top me-3 img"
              src="https://i.postimg.cc/BbhCdy6n/circle-cropped-5.png"
              width="24px"
              height="24px"
              alt="My Pic"
            />
            Adhiraj Bhatia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-auto">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link className="nav-link active mx-auto" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link className="nav-link active mx-auto" to="/work">
                  Work
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link className="nav-link active mx-auto" to="/skills">
                  Technologies
                </Link>
              </li>
              <li className="nav-item mx-auto">
                <Link className="nav-link active mx-auto" to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
