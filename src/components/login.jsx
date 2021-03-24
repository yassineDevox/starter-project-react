import React from "react";
import { Link } from "react-router-dom";
import "./../assets/main.css";


export default function Login(props) {
 
  return (
    <div className=" ">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className=" card-signin  my-5">
            <div className="card-body">
              <h5 className="card-title text-center fs-1 text-white">SignIn</h5>
              <form onSubmit={props.handleSubmit} className="form-signin">
                <div className="form-label-group">
                  <input
                    onChange={props.handleChange}
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    name="email"
                  />
                </div>
                <div className="form-label-group">
                  <input
                    onChange={props.handleChange}
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                  />
                </div>

              
                  <button
                    className="btn btn-lg btn-warning  btn-block text-uppercase  w-100 "
                    type="submit"
                  >
                    Sign in
                  </button>
              

                <hr className="my-4" />
                <Link to="/register" className=" p-2">
                  you don't have an account ?
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
