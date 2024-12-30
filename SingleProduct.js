import React, { useContext } from 'react';
import { CartContext } from '../Context';
import './style.css';

const SingleProduct = ({ prod }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const isInCart = cart.find((item) => item.id === prod.id);

  return (
    <div className="products">
      <img src={prod.image} alt={prod.productName} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.productName}</span>
        <span>₹{prod.price.substring(0, 3)}</span>
      </div>
      {isInCart ? (
        <div className="quantityContainer">
          <button className="quantityBtn" onClick={() => removeFromCart(prod)}>
            -
          </button>
          <span>{isInCart.quantity}</span>
          <button className="quantityBtn" onClick={() => addToCart(prod)}>
            +
          </button>
        </div>
      ) : (
        <button className="add" onClick={() => addToCart(prod)}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
