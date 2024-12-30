import React, { useEffect, useContext, useState } from 'react';
import { CartContext } from '../Context';
import './style.css';

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0));
  }, [cart]);

  return (
    <div className="cartPage">
      <span className="cartTitle">My Cart</span>
      <br />
      <span className="cartTotal">Total: ₹{total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <div key={prod.id} className="cartItem">
            <span>{prod.productName}</span>
            <span>₹{prod.price}</span>
            <span>Qty: {prod.quantity}</span>
            <button onClick={() => removeFromCart(prod)}>-</button>
            <button onClick={() => addToCart(prod)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
