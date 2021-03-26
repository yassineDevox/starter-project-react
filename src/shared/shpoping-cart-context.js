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
  addToCart = (SelecteProduct) => {
    let p = this.state.list_order_data.find((o) => o.id == SelecteProduct.id);
    if (p == undefined) {
      //ajouter a la liste
      let newList = this.state.list_order_data;
      newList.push({ ...SelecteProduct, quantity: 1 });

      this.setState({ list_order_data: newList });
    } else {
      let newList = this.state.list_order_data;

      newList.forEach((order) => {
        if (order.id == p.id) {
          order.quantity++;
        }
      });

      this.setState({ list_order_data: newList });
    }

    console.log(SelecteProduct);
  };

  remove = (removedId) => {

    let choice = window.confirm("Are you sure 😅?")
    if(choice){
        let newList = this.state.list_order_data.filter(o=>o.id!=removedId)
        this.setState({list_order_data:newList})
    }
  };




  updateQuantity = () => {};

  render() {
    return (
      <ShoppingCartContext.Provider
        value={{
          list_order_data: this.state.list_order_data,
          addToCart: this.addToCart,
          remove: this.remove,
          updateQuantity: this.updateQuantity,
        }}
      >
        {this.props.children}
      </ShoppingCartContext.Provider>
    );
  }
}

export default ShoppingCartContext;
