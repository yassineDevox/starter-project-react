import React, { Component } from "react";

//create authContext from React
const ShoppingCartContext = React.createContext();

export class ShoppingCartProvider extends Component {
    
  // data shared
  constructor(props) {
    super(props);
    this.state = {
      list_order_data: [],
    };
  }

  //-- features 
  addToCart = ()=>{ alert("add to cart 😀 !!")}
  remove = ()=>{}
  updateQuantity = ()=>{}

  render() {
    return (
      <ShoppingCartContext.Provider
        value={{
          list_order_data: this.state.list_order_data,
          addToCart:this.addToCart,
          remove:this.remove,
          updateQuantity:this.updateQuantity
        }}
      >
        {this.props.children}
      </ShoppingCartContext.Provider>
    );
  }
}

export default ShoppingCartContext;