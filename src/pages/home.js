import React, { Component } from "react";
import ProductModel from "../models/exemple-model";
import ShoppingCartContext from "../shared/shpoping-cart-context";
import Website from "../theme/website";

export default class HomePage extends Component {

    constructor(){
        super()
        this.state = {
            products:[
                new ProductModel(1,"product 1","dadazdada",200,"electornique"),
                new ProductModel(2,"product 2","dadazdada",200,"electornique"),
                new ProductModel(3,"product 3","dadazdada",200,"education"),
                new ProductModel(4,"product 4","dadazdada",200,"electornique"),
                new ProductModel(5,"product 5","dadazdada",200,"education")

            ]
        }
    }


  render() {
    return (
      <Website>
        <div>Home Page</div>
        {this.state.products.map((p) => {
          return (
            <button
              onClick={() => this.addToCart(p)}
              className="btn btn-warning m-3"
            >
              {p.title}
            </button>
          );
        })}
      </Website>
    );
  }

  addToCart = (seletedProduct) => {
    this.context.addToCart(seletedProduct);
  };
}

HomePage.contextType = ShoppingCartContext;
