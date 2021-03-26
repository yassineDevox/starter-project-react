import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "../pages/cart";
import Error404Page from "../pages/error404-page";
import HomePage from "../pages/home";
import ShopePage from "../pages/shope";
import { ShoppingCartProvider } from "../shared/shpoping-cart-context";

export default function AppRouter() {
  return (
    <Router>
      <ShoppingCartProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shope" component={ShopePage} />
          <Route  path="/cart" component={CartPage} />
          <Route path="*" component={Error404Page} />
        </Switch>
      </ShoppingCartProvider>
    </Router>
  );
}
