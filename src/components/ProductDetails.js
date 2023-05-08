import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/action/index";
import React, { useState, useEffect } from "react";
import "./css/Product-Details.css";
import star from "./images/star.png";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addItem(product));
  };
  const increaseCount = () => {
    setQuantity(quantity + 1);
  };
  const decreaseCount = () => {
    setQuantity(quantity - 1);
  };
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`).then((response) => {
      response
        .json()
        .then((data) => {
          setProduct(data);
          setLoading(false);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    // localStorage.setItem("cart", JSON.stringify(product));
  }, []);

  function Loading() {
    return <>Loading....</>;
  }

  function ShowProducts() {
    return (
      <div className="row">
        <div className="col-lg-5 col-md-12 col-12 product-detail-card">
          <img
            className="img-fluid w-100 main-image"
            src={product.image}
            alt={product.title}
            key={product.id}
          />
          <div className="small-img-group">
            <div className="small-img-col">
              <img
                src={product.image}
                className="small-img"
                width="100%"
                alt={product.title}
                key={product.id}
              />
            </div>
            <div className="small-img-col">
              <img
                src={product.image}
                className="small-img"
                width="100%"
                alt={product.title}
                key={product.id}
              />
            </div>
            <div className="small-img-col">
              <img
                src={product.image}
                className="small-img"
                width="100%"
                alt={product.title}
                key={product.id}
              />
            </div>
            <div className="small-img-col">
              <img
                src={product.image}
                className="small-img"
                width="100%"
                alt={product.title}
                key={product.id}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-12 product-detail-info">
          <h5 className="product-category">{product.category}</h5>
          <h3 className="product-title">{product.title}</h3>
          <h2 className="product-price">$ {product.price}</h2>
          <p className="product-rating">
            <img src={star} className="star" alt="" />
            {product.rating && product.rating.rate}
          </p>
          <button class="down" onClick={decreaseCount}>
            -
          </button>
          <input type="text" className="qty" value={quantity} />
          <button class="up" onClick={increaseCount}>
            +
          </button>
          <p className="product-description">{product.description}</p>
          <Link to="/cart">
            <button
              className="addToCart-btn"
              onClick={() => addProduct(product)}
            >
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container">{loading ? <Loading /> : <ShowProducts />}</div>
  );
}

export default ProductDetails;
