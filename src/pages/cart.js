
import React, { Component } from "react";
import ShoppingCartContext from "../shared/shpoping-cart-context";
import Website from "../theme/website";
import axios from "../utils/axios";

export default class CartPage extends Component {

    constructor(){
        super()
        this.state = {
            fullname:"",
            phone:""
        }
    }
  render() {
    return (
      <Website>
        <div>list dyal les produits li fel panier 😀</div>

        <ul>
          {this.context.list_order_data.map((o) => {
            return (
              <li key={o.id} className="m-2">
                {o.title}
                <input 
                        type="number" 
                        value={o.quantity}
                        onChange={(e) => this.updateQuantity(e,o.id)} 
                        min="1"
                />
                <button
                  onClick={() => this.removeItem(o.id)}
                  className="btn btn-danger"
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.orderNow}>
          <input type="text" placeholder="Entrer your phone number" name="phone" onChange={this.handleChange}/>
          <br />
          <input type="text" placeholder="full name" name="fullname"  onChange={this.handleChange}/>
          <br />
          <button type="submit" className="btn btn-danger"> Order Now 😝 </button>
        </form>
      </Website>
    );
  }

  handleChange = (e)=>{
    let value = e.target.value;
    let name = e.target.name;
    this.setState({[name]:value})
  }

  orderNow = (e)=>{
   
    e.preventDefault();
   
    // gadit les donner dyawli 
    let myOrders = this.context.list_order_data.map(o=>{
        delete o.id;//remove property id for order
        return {...o,phone:this.state.phone,fullname:this.state.fullname}
    })
    
    //sifat les donnees dyali be axios (post)
    for (let i = 0; i < myOrders.length; i++) {
        const order = myOrders[i];
        axios.post("orders.json",order).then((r)=>console.log(r.data.name))  
    }    
    console.log(myOrders);
  }

  updateQuantity = (e,id)=>{


    this.context.updateQuantity(e.target.value,id)

  }

  removeItem = (removedId) => {
    this.context.remove(removedId);
  };
}

CartPage.contextType = ShoppingCartContext;
