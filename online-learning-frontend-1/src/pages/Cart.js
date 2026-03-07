import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems, totalPrice } = useCart();
  // const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <h5 className="text-muted mb-4">Your cart is empty.</h5>
          <Link to="/courses" className="btn btn-primary">
            Browse Courses
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 sticky-top" style={{ top: '20px' }}>
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Order Summary</h4>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span className="fw-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <span className="h5 mb-0">Total</span>
                  <span className="h5 mb-0 text-primary">${totalPrice.toFixed(2)}</span>
                </div>
                <Link to="/checkout" className="btn btn-primary w-100 btn-lg">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
