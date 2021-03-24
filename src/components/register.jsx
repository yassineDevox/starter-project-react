import React from "react";

import { Link } from "react-router-dom";
import "../assets/main.css";


export default function Register(props) {
  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className=" card-signin my-5">
              <div className="card-body">
              <h5 className="card-title text-center fs-1 fw-bold text-white ">Register</h5>
             <form   
                onSubmit={props.handleSubmit}
                 className="form-signin">
                  <div className="form-label-group">

                    {/* firstname */}
                    <input
                    onChange={props.handleChange}
                      type="text"
                      className="form-control"
                      name="firstname"
                      placeholder="Firstname"
                      required
                      autofocus
                    />
                  </div>

                  {/* last name */}
                  <div className="form-label-group">
                    <input
                    onChange={props.handleChange}
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Lastname"
                      required
                      autofocus
                    />
                  </div>
                  <div className="form-label-group">
                    <input
                    onChange={props.handleChange}
                    name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      required
                      autofocus
                    />
                  </div>
                  <div className="form-label-group">
                    <input
                    onChange={props.handleChange}
                    name="password"
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-label-group">
                    <input
                    onChange={props.handleChange}
                    name="confirmedPassword"
                      type="password"
                      className="form-control"
                      placeholder="repeat password"
                      aria-describedby="basic-addon1"
                     
                    />
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-warning btn-block text-uppercase"
                    type="submit"
                  >
                    Sign up
                  </button>
                  <hr className="my-4" />
                </form>
                <Link to="/admin" className=" p-2">Log in if you're already registered</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
