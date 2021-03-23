import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/admin/auth/login/login-page";
import RegisterPage from "../pages/admin/auth/register/register-page";
import DashboardPage from "../pages/admin/dash/dashboard-page";
import Error404Page from "../pages/errors/error404-page";
import WebsitePage from "../pages/website/website";

export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={WebsitePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/admin" component={LoginPage} />
          <Route path="/dash" component={DashboardPage} />
          <Route path="*" component={Error404Page} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
