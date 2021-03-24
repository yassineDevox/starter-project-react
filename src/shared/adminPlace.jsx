import React, { useContext } from "react";
import "./auth/shared.css";
import AuthContext from "./auth/auth-context";
import {Link} from 'react-router-dom'

export default function AdminPage() {
    const {logout} = useContext(AuthContext)
    return (
       

      <div id="body ">
        <div className="container">
          <nav className="navbar">
            <div className="nav_icon" onclick="toggleSidebar()">
              <i className="fa fa-bars" aria-hidden="true" />
            </div>

            <div className=" d-flex ">

              {/* input */}
              <div className="input-group mb-3 p-2">
                <button
                  className="btn btn-dark"
                  type="button"
                  id="button-addon1"
                  
                >
                  
                  <i class="fas fa-search"></i>
                </button>
                <input
                
                  type="text"
                  className="form-control "
                  placeholder="search"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>

           

            

     {/* name */}
     <div className=" p-2">
                <h6>Welcome firstname lastname</h6>
              </div>
            </div>
      

  {/* logout button   */}
  <div className="   ">
              <Link to="/admin">
              <button
                onClick={()=>logout()}
                  className="btn btn-outline-secondary-sm"
                  type="button"
                  id="button-addon1"
                >
                  <i class="fas fa-sign-out-alt"></i>LogOut
                </button>
              
              </Link>
              </div>



    
    {/* done */}



          </nav>
          <main>{/* {props.children} */}</main>
          <div id="sidebar">
            <div className="sidebar__title">
              <div className="sidebar__img">
                <img src="" alt="logo" />
                <h1>Codersbite</h1>
              </div>
              <i
                onclick="closeSidebar()"
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
              />
            </div>
            <div className="sidebar__menu">
              <div className="sidebar__link active_menu_link">
                <i className="fa fa-home" />
                {/* <a href="#">Dashboard</a> */}
              </div>
              <h2>MNG</h2>
              <div className="sidebar__link">
                <i className="fas fa-home" />
                <a to="/home"> Home</a>
              </div>
              <div className="sidebar__link">
                <i className="fas fa-tasks" />
                <a to="/categorie"> Manage Categories</a>
              </div>
              <div className="sidebar__link">
                <i className="fas fa-cubes" />
                <a to="/product"> Manage Product</a>
              </div>
              <div className="sidebar__link">
                <i className="fas fa-shopping-cart" />
                <a to="/cart"> User's Shopping Cart</a>
              </div>
              <div className="sidebar__link">
                <i className="fas fa-check" />
                <a to="/order"> Confirm Order</a>
              </div>
              <div className="sidebar__link">
                <i className="fa fa-wrench" />
                <a to="/setting">Settings</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}
