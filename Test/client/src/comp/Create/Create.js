import React from "react";
import "../Register/resgister.css"
const Create = () => {
  return (
    <div className="mainFrom">
      <form>
        <div class="mb-3">
          <label for="exampleInputtitle" class="form-label">
            Task Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputtitle"
            aria-describedby="titleHelp"
          />
        </div>
        <div class="input-group mb-3">
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Priority sorting
          </div>
          <ul class="dropdown-menu dropdown-menu-end">
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
        </div>
        <div class="input-group mb-3">
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Category Tag
          </div>
          <ul class="dropdown-menu dropdown-menu-end">
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
        </div>
        <div class="input-group mb-3">
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Status
          </div>
          <ul class="dropdown-menu dropdown-menu-end">
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
          </ul>
        </div>
        <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02" />
          <label class="input-group-text" for="inputGroupFile02">
            Upload
          </label>
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
          />
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Collaborative action
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Collaborative action
              </a>
            </li>
          </ul>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
