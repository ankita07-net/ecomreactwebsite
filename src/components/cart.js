import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delItem } from "../redux/action/index";
import { useEffect, useState } from "react";
import "./css/Cart.css";

function Cart() {
  let state = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  let totalAmount = 0;

  const increaseCount = () => {
    setQuantity(quantity + 1);
  };
  const decreaseCount = () => {
    setQuantity(quantity - 1);
  };

  const dispatch = useDispatch();

  const handleClose = (product) => {
    dispatch(delItem(product));
  };

  const cartItems = state.map((product) => {
    totalAmount += product.price;
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3">
          <div className="container py-4">
            <button
              onClick={() => handleClose(product)}
              className="btn-close float-end"
              aria-label="Close"
            ></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h4 className="cart-product-name">
                  {product.title.substring(0, 12)}
                </h4>
                <button className="down" onClick={decreaseCount}>
                  -
                </button>
                <input type="text" className="qty" value={quantity} />
                <button className="up" onClick={increaseCount}>
                  +
                </button>
                <p className="lead fw-bold">$ {product.price}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  function TotalAmount() {
    return (
      <>
        <div className="cart-total-container">
          <div className="cart-amount">
            <span className="sbtotal">Subtotal :</span>
            <span className="sbttl-amount">${Math.trunc(totalAmount)}</span>
          </div>
          <div className="shipping-charge">
            <span className="shipping"> Shipping :</span>
            <span className="shp-amount">Free</span>
          </div>
          <div className="cart-total-amount">
            <span className="total">Total :</span>
            <span className="ttlamount">${Math.trunc(totalAmount)}</span>
          </div>
        </div>
      </>
    );
  }
  function emptyCart() {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5 empty-cart">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  }

  function button() {
    return (
      <div className="btn-container">
        <Link
          to="/checkout"
          className="btn btn-outline-primary mb-5 w-25 mx-auto btn-checkout"
        >
          Proceed To checkout
        </Link>
      </div>
    );
  }
  useEffect(() => {
    localStorage.setItem("totalAmount", totalAmount);
  }, [totalAmount]);
  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && cartItems}
      {state.length !== 0 && TotalAmount()}
      {state.length !== 0 && button()}
    </>
  );
}

export default Cart;
