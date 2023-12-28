import React from "react";
import "../Register/resgister.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mainFrom">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary mr-5">
          Login
        </button>
        <div class="mb-3">
          <Link to="/register">Resgister First</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
