import React from "react";
import "./css/Checkout.css";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";

function Checkout() {
  let subTotalAmount = JSON.parse(localStorage.getItem("totalAmount"));

  return (
    <main>
      <div className="checkout-container">
        <div className="checkout-heading">
          <h3>Checkout</h3>
        </div>
        <div className="checkout-section">
          <div className="checkout-delivery-form">
            <h2 className="guest-heading">Guest Checkout</h2>
            <div className="contact-info">
              <h4 className="shipping-heading">1. Shipping Information</h4>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstName4"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastName4"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputnumber"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCountry"
                      placeholder="Country"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputState"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
              </form>
            </div>
            <ShippingMethod />
            <PaymentMethod />
          </div>
          <div className="checkout-summary">
            <h3 className="summary-heading"> Price summary</h3>
            <div className="order-pricing">
              <div className="order-detail">
                <span>SubTotal</span>
                <span>${Math.trunc(subTotalAmount)}</span>
              </div>
              <div className="order-detail">
                <span>Discount</span>
                <span>-$10</span>
              </div>
              <div className="order-detail">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="total-order-detail">
                <b>Total</b>
                <b>${Math.trunc(subTotalAmount)}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
