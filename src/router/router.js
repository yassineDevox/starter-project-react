import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard-page";
import Error404Page from "../pages/error404-page";
import LmsPage from "../pages/lms-page";
import ProductsPage from "../pages/products";
import RegisterPage from "../pages/register/register-page";
import AdminPlace from "../pages/sharedPage";
import { AuthProvider } from "../shared/auth/auth-context";
import LoginPage from "./../pages/login/login-page";


export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={LmsPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/admin" component={LoginPage} />
          <Route path="/dash" component={DashboardPage} />          
          <Route path="/products" component={ProductsPage} />
          <Route path="/adminDash" component={AdminPlace} />
          <Route path="*" component={Error404Page} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
