import React from "react";
import { Link } from "react-router-dom";

function PaymentMethod() {
  return (
    <div className="payment-method">
      <h4 className="section3">3. Payment Information</h4>
      <form>
        <div className="radio_control">
          <input
            type="radio"
            name="credit"
            id="credit"
            defaultValue="Credit Card"
          />
          <label>Credit Card</label>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>
              Name on Card
              <br />
              <input
                className="form-control"
                type="text"
                name="cardName"
                id="cardName"
                required=""
                defaultValue=" "
              />
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>
              Credit Card Number
              <br />
              <input
                className="form-control"
                type="number"
                name="cardNumber"
                id="cardNumber"
                required=""
                defaultValue=" "
              />
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>
              Expiration Date
              <br />
              <input
                className="form-control"
                type="date"
                required=""
                defaultValue=""
              />
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>
              CVV
              <br />
              <input
                className="form-control"
                type="text"
                name="cvv"
                id="cvv"
                required=""
                defaultValue=""
              />
            </label>
          </div>
        </div>

        <div className="action">
          <Link to="/confirmation">
            <button
              aria-label="shipping information"
              className="btn_lab shipping_button"
            >
              <span>CONTINUE</span>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethod;
