import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePay = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.address) {
      setIsPaid(true);
      clearCart();
    } else {
      alert('Please fill in all fields.');
    }
  };

  if (isPaid) {
    return (
      <div className="container py-5 text-center">
        <div className="card shadow-sm border-0 mx-auto" style={{ maxWidth: '600px' }}>
          <div className="card-body p-5">
            <div className="mb-4">
              <svg className="text-success" width="80" height="80" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
            </div>
            <h1 className="fw-bold mb-3">Payment Successful!</h1>
            <p className="lead text-muted mb-4">Thank you for your purchase, {formData.name}. You now have access to your courses.</p>
            <button onClick={() => navigate('/')} className="btn btn-primary btn-lg px-5">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Checkout</h1>
      <div className="row">
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">Billing Information</h4>
              <form onSubmit={handlePay}>
                <div className="mb-3">
                  <label className="form-label fw-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-medium">Address</label>
                  <textarea
                    name="address"
                    className="form-control"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your Full Address"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Complete Payment (${totalPrice.toFixed(2)})
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card shadow-sm border-0 sticky-top" style={{ top: '20px' }}>
            <div className="card-body p-4">
              <h4 className="fw-bold mb-4">Order Summary</h4>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                  <div>
                    <h6 className="mb-1">{item.title}</h6>
                    <small className="text-muted">By {item.instructor}</small>
                  </div>
                  <span className="fw-bold">${item.price.toFixed(2)}</span>
                </div>
              ))}
              <div className="d-flex justify-content-between pt-3">
                <span className="h5 mb-0">Total</span>
                <span className="h5 mb-0 text-primary">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
