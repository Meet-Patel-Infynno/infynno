import React from "react";
import "../components.css";
import Logo from "../../images/Ellipse1.png";

const Navbar = () => {
  return (
    <>
      <section className="main">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand">DRAMATIC</a>
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
              style={{ marginLeft: "44px" }}
            >
              <ul
                className="navbar-nav mb-2 mb-lg-0 d-flex"
                style={{ gap: "37px" }}
              >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    TV Show
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    New
                  </a>
                </li>
              </ul>
              <form
                className="d-flex"
                role="search"
                style={{ marginLeft: "127px", width: "324px" }}
              >
                <input
                  className="form-control search-box"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn sbtn" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
              <div className="icons d-flex">
                <div className="gift" style={{ marginLeft: "55px" }}>
                  <i className="fa-solid fa-gift"></i>
                </div>
                <div className="bell" style={{ marginLeft: "41px" }}>
                  <i className="fa-regular fa-bell"></i>
                </div>
                <div className="user" style={{ marginLeft: "41px" }}>
                  <img src={Logo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
