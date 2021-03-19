import React from 'react'

import { Link } from "react-router-dom";
import "./../assets/main.css";
import  bgImage from "./../assets/bg-01.jpg"


export default function Login(props) {
    return (
        <div>
          <div className="limiter">
            <div
              className="container-login100"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="wrap-login100">
                <form onSubmit={props.handleSubmit} className="login100-form validate-form">
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
                      onChange={props.handleChange}
                      className="input100"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <span className="focus-input100" data-placeholder="😃" ></span>
                  </div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Enter password"
                  >
                    <input 
                    onChange={props.handleChange}
                      className="input100"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <span className="focus-input100" data-placeholder="🤨" />
                  </div>
                
                  <div className="container-login100-form-btn">
                    <button type="submit" className="login100-form-btn">Login</button>
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
    )
}
