// CartPopup.js
import React from 'react';

const CartPopup = ({ cart, onClose }) => {
  return (
    <div className='cart-popup'>
      <div className='cart-popup-content'>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <h2>Shopping Cart</h2>
        {cart.map((cartItem, index) => (
  <div key={index}>
    <p>{cartItem.title}</p>
    <p>Price: &#x20B9;{cartItem.price}</p>
    {/* Add more details as needed */}
  </div>
))}


      </div>
    </div>
  );
};

export default CartPopup;
