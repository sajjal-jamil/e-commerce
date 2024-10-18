import React from 'react';
import { useCart } from '../../context/cartcontext';

const Cart = () => {
  const { cartItems, removeItemFromCart, getTotalAmount } = useCart();

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          <p>Products</p>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.title}</p>
              <p>${item.price.toFixed(2)}</p>
              <p>{item.quantity}</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <hr />
          <div className="cartItemsDown">
            <div className="cartItemsTotal">
              <h1>Cart Total</h1>
              <div className="cartItemsTotalItems">
                <p>Subtotal</p>
                <p>${getTotalAmount().toFixed(2)}</p>
              </div>
              <hr />
              <div className="cartItemsTotalItems">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <p>Total</p>
              <p>${getTotalAmount().toFixed(2)}</p>
              <button>CHECK TO PROCEED</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
