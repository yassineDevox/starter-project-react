import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartContext from "../shared/shpoping-cart-context";

export default function Website(props) {
  const { list_order_data } = useContext(ShoppingCartContext);
  return (
    <div>
      <header className="border border-dark">
        <nav>
          <ul>
            <li>
              <Link to="/"> home</Link>
            </li>
            <li>
              <Link to="/shope">product details</Link>
            </li>
          </ul>
        </nav>
        <Link to="/cart">
          <button class="btn btn-dark">
            <i class="fa fa-shopping-basket mr-3"></i>
            <span class="badge badge-danger">{list_order_data.length}</span>
          </button>
        </Link>
      </header>
      <main className="p-5">{props.children}</main>
    </div>
  );
}
