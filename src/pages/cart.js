import React, { Component } from "react";
import ShoppingCartContext from "../shared/shpoping-cart-context";
import Website from "../theme/website";

export default class CartPage extends Component {
  render() {
    return (
      <Website>
        <div>list dyal les produits li fel panier 😀</div>

        <ul>
          {this.context.list_order_data.map((o) => {
            return (
              <li className="m-2">
                {o.title} <input type="number" value={o.quantity} />{" "}
                <button onClick={ ()=> this.removeItem(o.id)} className="btn btn-danger">X</button>
              </li>
            );
          })}
        </ul>
        <form>
          <input type="text" placeholder="Entrer your phone number" />
          <br />
          <input type="text" placeholder="full name" />
          <br />
          <button className="btn btn-danger"> Order Now 😝 </button>
        </form>
      </Website>
    );
  }

  removeItem = (removedId)=>{
      this.context.remove(removedId);
  }
}

CartPage.contextType = ShoppingCartContext;
