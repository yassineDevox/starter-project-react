import React, { Component } from "react";
import ShoppingCartContext from "../shared/shpoping-cart-context";
import Website from "../theme/website";

export default class ShopePage extends Component {
  render() {
    return (
      <Website>
        <div>Product Details page</div>
        <button className="btn btn-warning" onClick={this.addToCart}>Add To Cart</button>
      </Website>
    );
  }

  addToCart = () =>{
      this.context.addToCart();
  }
}

ShopePage.contextType = ShoppingCartContext;
