import React, { useEffect, useState } from "react";
import "./css/Product.css";
import star from "./images/star.png";
import { Link } from "react-router-dom";

function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const ProductData = "https://fakestoreapi.com/products";

  useEffect(() => {
    setLoading(true);
    fetch(ProductData).then((res) => {
      res
        .json()
        .then((data) => {
          setData(data);
          setFilter(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  const filterProducts = (catItem) => {
    console.log(data);
    const result = data.filter((catData) => {
      return catData.category === catItem;
    });
    setFilter(result);
  };

  function Loading() {
    return <div>Loading product page....</div>;
  }
  function ShowProducts() {
    return (
      <main className="product-details">
        <div className="product-card">
          {filter.map((item) => (
            <div className="card-details">
              <figure className="image-container" key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
              </figure>
              <div className="product-info">
                <img src={star} className="star" alt="rating-star" />
                <span className="product-rating">{item.rating.rate}</span>
                <p className="product-name">{item.title.substring(0, 12)}</p>
                <span className="product-price">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <div className="product-container">
      <div className="category-details">
        <div className="category-name">
          <a href="./">Product</a>
        </div>
        <div className="product-result">
          {data.length > 1 && data.length} Results
        </div>
        <div className="sort-filter">
          <select className="dropdown-filter">
            <option value="Default">Sort by Price</option>
            <option value="Default">Default</option>
            <option value="lowtohigh">Low to High</option>
            <option value="hightolow">High to Low</option>
          </select>
        </div>
      </div>
      <aside className="product-filter">
        <div className="filter-container">
          <h5 className="filters-title">Filters</h5>
          <div className="filters-details">
            <h5 className="filter-category">Categories</h5>
            <div className="checkbox-category">
              <input
                type="checkbox"
                name="Men"
                onChange={() => setFilter(data)}
              />
              <label>All</label>
            </div>
            <div className="checkbox-category">
              <input
                type="checkbox"
                name="Men"
                onChange={() => filterProducts("men's clothing")}
              />
              <label>Men</label>
            </div>
            <div className="checkbox-category">
              <input
                type="checkbox"
                name="Women"
                onChange={() => filterProducts("women's clothing")}
              />
              <label>Women</label>
            </div>
            <div className="checkbox-category">
              <input
                type="checkbox"
                name="Jewelry"
                onChange={() => filterProducts("jewelery")}
              />
              <label>Jewelry</label>
            </div>
            <div className="checkbox-category">
              <input
                type="checkbox"
                name="Electronics"
                onChange={() => filterProducts("electronics")}
              />
              <label>Electronics</label>
            </div>
          </div>
        </div>
      </aside>
      <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
}

export default Product;
