import { useContext } from "react";
import { Link } from "react-router-dom";
import "./../assets/style.css";
import AuthContext from "./auth/auth-context";

export default function AdminTheme(props) {
  
  const  { logout } = useContext(AuthContext)
  return (
    <div class="home">
      <div className="container-fluid display-table">
        <div className="row display-table-row">
          <div
            className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
            id="navigation"
          >
            <div className="logo">
              <a hef="home.html">
                <img
                  src="https://image.freepik.com/free-vector/online-shop-store-e-commerce-sale-msacot-cute-logo_8169-157.jpg"
                  alt="merkery_logo"
                  className="hidden-xs hidden-sm"
                  height="150px"
                  style={{width:150}}
                  
                />
                <img
                  src="https://image.freepik.com/free-vector/online-shop-store-e-commerce-sale-msacot-cute-logo_8169-157.jpg"
                  alt="merkery_logo"
                  className="visible-xs visible-sm circle-logo"
                  height="150px"
                  
                />
              </a>
            </div>
            <div className="navi">
              <ul>
                <li className="active">
                  <a href="#">
                    <i className="fa fa-home" aria-hidden="true" />
                    <span className="hidden-xs hidden-sm">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-puzzle-piece" aria-hidden="true" />
                    <span className="hidden-xs hidden-sm">
                      Manage Categories
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cubes" aria-hidden="true" />
                    <span className="hidden-xs hidden-sm">Manage Products</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-shopping-bag" aria-hidden="true" />
                    <span className="hidden-xs hidden-sm">Manage Orders</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-shopping-cart" aria-hidden="true" />
                    <span className="hidden-xs hidden-sm">
                      User's Shopping Cart
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-calendar-check-o" aria-hidden="true" />
                    <span className="hidden-xs hidden-sm">Confirm Orders</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span className="hidden-xs hidden-sm">Setting</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 col-sm-11 display-table-cell v-align">
            <div className="row">
              <header>
                <div className="col-md-7">
                  <nav className="navbar-default pull-left">
                    <div className="navbar-header">
                      <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="offcanvas"
                        data-target="#side-menu"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                  </nav>
                 <input style={{marginTop:10}} className="form-control" placeholder="Search For Something ..." type="text" />
                </div>
                <div className="col-md-5">
                  <div className="header-rightside">
                    <ul className="list-inline header-top pull-right">
                      <li className="dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <img
                            src="https://alchetron.com/cdn/one-manga-artist-ad8bc5b2-fde2-4c20-ab15-62d95b21842-resize-750.jpeg"
                            alt="user"
                          />
                          <b className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <div className="navbar-content">
                              <span>JS Krishna</span>
                              <p className="text-muted small">
                                me@jskrishna.com
                              </p>
                              <div className="divider"></div>
                              <Link to="/admin" onClick={ ()=> logout() }>
                                <a href="#" className="btn btn-danger">
                                  <i
                                    style={{ color: "white" }}
                                    className="fa fa-sign-out"
                                    aria-hidden="true"
                                  />{" "}
                                  logout
                                </a>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
            </div>
            <div style={{ padding: 20 }} className="user-dashboard">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
