import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const navbarStyle = {
  backgroundColor: "rgb(233 230 230)",
  color: "white",
  padding: "10px",
};

const allRoutes = [
  { path: "/", label: "Home" },
  { path: "/business", label: "Business" },
  { path: "/entertainment", label: "Entertainment" },
  { path: "/general", label: "General" },
  { path: "/health", label: "Health" },
  { path: "/science", label: "Science" },
  { path: "/sports", label: "Sports" },
  { path: "/technology", label: "Technology" },
];

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav style={navbarStyle} className="navbar navbar-expand-lg ">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">
              NewsApp
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {allRoutes.map((route) => (
                  <li className="nav-item" key={route.path}>
                    <NavLink
                      className="nav-link mx-3"
                      aria-current="page"
                      to={route.path}
                    >
                      {route.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
