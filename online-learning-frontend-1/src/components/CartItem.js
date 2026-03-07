import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="card mb-3 shadow-sm border-0">
      <div className="card-body">
        <div className="row align-items-center">
          {/* <div className="col-md-2">
            <img src={item.image} alt={item.title} className="img-fluid rounded" />
          </div> */}
          <div className="col-md-6">
            <h5 className="fw-bold mb-1">{item.title}</h5>
            <p className="text-muted small mb-0">By {item.instructor}</p>
          </div>
          <div className="col-md-2 text-center">
            <span className="h5 mb-0 text-primary">${item.price.toFixed(2)}</span>
          </div>
          <div className="col-md-2 text-end">
            <button onClick={() => removeFromCart(item.id)} className="btn btn-outline-danger btn-sm">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
