import React from "react";
import "./css/Confirmation.css";
import { Link } from "react-router-dom";
function Confirmation() {
  return (
    <div className="confimation-container">
      <div className="confirmation-order">
        <div className="order-heading">
          <h1>Order Successful</h1>
        </div>
        <div className="confirmation-order-detail">
          <h3 className="order-No">Order Number #</h3>
          <p className="order-para">
            You will also receive an email with the details and we will let you
            know when your order has shipped.
          </p>
          <p>Thanks for shopping </p>
          <div className="continue-shop-btn">
            <Link to="/product"> Click here </Link>
            to continue shopping !
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
