import React from 'react'
import "../utils/index.css"

export default function Index() {
    return (
       <div>
         <div>
  <div className="container-sm mt-5">
    <div className="navbar">
      <div className="logo">
        <a href="index.html"><img src="https://i.ibb.co/kDVwgwp/logo.png" alt="RedStore" width="125px" /></a>
      </div>
      <nav>
        <ul id="MenuItems">
          <li><a href="index.html">Home</a></li>
          <li><a href="product.html">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="account.html">Account</a></li>
        </ul>
      </nav>
      <a href="cart.html"><img src="https://i.ibb.co/PNjjx3y/cart.png" alt width="30px" height="30px" /></a>
      <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" className="menu-icon" onclick="menutoggle()" />
    </div>
  </div>
  {/* single product details */}
  <div className="container single-product d-flex justify-content-start">
    <div className="row">
      <div>
        <img src="https://i.pinimg.com/originals/76/b4/93/76b4934456b530dda0daabab39279e6a.jpg" alt="" width="100%" id="ProductImg" />
      </div>
    </div>
    <div className="container">
     
      <h1>Red Printed T-Shirt by HRX</h1>
      <h4>₹500</h4>
      
      <input type="number" defaultValue={1} />
      <button className="btn btn-warning">Add To Cart</button>
      <h3>Product Details <i className="fas fa-indent" /></h3>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
        accusamus soluta quasi illum, deserunt ut iste rem obcaecati
        inventore, est harum repellendus fuga velit odio sint officia
        corrupti eum perspiciatis.
      </p>
    </div>
  </div>
  {/* title */}
  <div className="small-container">
    <div className="row row-2">
      <h2>Related Products</h2>
      <p>View more</p>
    </div>
  </div>
  {/* products */}
  <div className="small-container">
    <div className="row">
      <div className="col-4">
        <img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <p>₹500.00</p>
      </div>
      <div className="col-4">
        <img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt />
        <h4>Red Printed T-shirt</h4>
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <p>₹500.00</p>
      </div>
      
    </div>
  </div>
  {/* Footer */}
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col-1">
          <h3>Download Our App</h3>
          <p>Download App for Android and iso mobile phone.</p>
          <div className="app-logo">
            <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt />
            <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt />
          </div>
        </div>
        <div className="footer-col-2">
          <img src="https://i.ibb.co/j3FNGj7/logo-white.png" alt />
          <p>
            Our Purpose Is To Sustainably Make the Pleasure and Benefits of
            Sports Accessible to the Many.
          </p>
        </div>
        <div className="footer-col-3">
          <h3>Useful Links</h3>
          <ul>
            <li>Coupons</li>
            <li>Blog Post</li>
            <li>Return Policy</li>
            <li>Join Affiliate</li>
          </ul>
        </div>
        <div className="footer-col-4">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright © 2021 - Red Store</p>
    </div>
  </div>
</div>

       </div>
    
    )
}
