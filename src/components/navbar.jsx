import React from "react";

const Navbar = (props) => {
  const currentPage = props.currentPage;
  const baseStyle = "nav-link mx-2";
  const active = "nav-link current-page mx-2";
  let navStyleHome = baseStyle;
  let navStyleAbout = baseStyle;

  if (currentPage === "home") {
    navStyleHome = active;
  } else if (currentPage === "about") {
    navStyleAbout = active;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex mx-auto fs-5 fw-medium">
              <a className={navStyleHome} href="/">
                Home
              </a>
              <a className={navStyleAbout} href="/about">
                About Me
              </a>
              <a
                className="nav-link mx-2"
                href="https://wa.me/083852169878"
                target="blank"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
