import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faPenToSquare,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Task Dashboard
          </a>
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Priority sorting
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      High
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Medium
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Low
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Status and Category Filter
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      To-Do
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Progress
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Complete
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Urgent
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Important
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Later
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Focus Time
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to="/create">
              <button className="btn btn-success" type="button">
                <FontAwesomeIcon icon={faPlus} />
                Create
              </button>
            </Link>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <Link to="/noti">
                <div className="position-relative">
                  <FontAwesomeIcon
                    icon={faBell}
                    size="2x"
                    style={{ cursor: "pointer" }}
                  />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    9
                  </span>
                </div>
              </Link>
              <button className="btn btn-warning" type="button">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="card" style={{ width: "18rem", margin: "40px" }}>
        <div className="card-body">
          <h5 className="card-title">title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Low</h6>
          <p className="card-text">Important</p>
          <p>File</p>
          <b>Deepak</b>
        </div>
        <FontAwesomeIcon icon={faTrash} color="red" size="2x" />
        <Link to="/edit">
          <FontAwesomeIcon icon={faPenToSquare} color="green" size="2x" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
