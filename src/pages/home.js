import React, { Component } from "react";
import ShoppingCartContext from "../shared/shpoping-cart-context";
import Website from "../theme/website";

export default class HomePage extends Component {
  render() {
    return (
      <Website>
        <div>Home Page</div>

        <button onClick={this.addToCart} className="btn btn-warning m-3">produit 1</button>
        <button onClick={this.addToCart} className="btn btn-warning m-3">produit 2</button>
        <button onClick={this.addToCart} className="btn btn-warning m-3">produit 3</button>

      </Website>
    );
  }

  addToCart = ()=>{
      this.context.addToCart();
  }
}

HomePage.contextType=ShoppingCartContext;

