import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./../../assets/main.css";
import  bgImage from "./../../assets/bg-01.jpg"


export default class LoginPage extends Component {
  render() {
    return (
        <div>
          <div className="limiter">
            <div
              className="container-login100"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="wrap-login100">
                <form className="login100-form validate-form">
                  <span className="login100-form-logo">
                    <i className="fas fa-key" />
                  </span>
                  <span className="login100-form-title p-b-34 p-t-27">
                    Log in
                  </span>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Enter username"
                  >
                    
                    <input
                      className="input100"
                      type="text"
                      name="username"
                      placeholder="Username"
                    />
                    <span className="focus-input100" data-placeholder="😃" ></span>
                  </div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Enter password"
                  >
                    <input
                      className="input100"
                      type="password"
                      name="pass"
                      placeholder="Password"
                    />
                    <span className="focus-input100" data-placeholder="🤨" />
                  </div>
                
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn">Login</button>
                  </div>
                  <div className="text-center p-t-90">
                    <a
                      className="txt1"
                      href="https://colorlib.com/etc/lf/Login_v3/index.html#"
                    >
                      <br/>
                      <Link to="/register" className="text-white">Create your account </Link>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="dropDownSelect1" ></div>
      </div>
    );
  }
}
