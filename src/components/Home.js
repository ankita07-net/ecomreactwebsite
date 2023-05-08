import "./css/Home.css";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "./images/slider-1.webp";
import slider2 from "./images/slider-2.webp";
import slider3 from "./images/slider-3.jpeg";
import { useEffect, useState } from "react";
import ProductImages from "./ProductImages";
import banner1 from "./images/banner-1.jpeg";
import banner2 from "./images/banner-2.webp";
import { Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);

  let productAPI = "https://fakestoreapi.com/products?limit=5";

  useEffect(() => {
    fetch(productAPI).then((response) => {
      response
        .json()
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  return (
    <main className="main-content">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="home-section">
        <div className="section-content">
          <h1>Explore new collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis
            mattis aliquam faucibus purus.
          </p>
          <Link to="/product">
            <button className="btn-home">Shop Now</button>
          </Link>
        </div>
      </section>
      <div className="home-product-details">
        <ProductImages details={data} />
      </div>
      <section className="home-banner1">
        <div className="home-product-details1">
          <h1>Spring collection</h1>
          <strong>Lorem Ipsum Dolor Tempor</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore
            magna.
          </p>
          <Link to="/product">
            <button className="btn-shop1">Shop Women</button>
          </Link>
        </div>
        <div className="banner-image1">
          <img src={banner1} alt="banner-image1" />
        </div>
      </section>
      <section className="home-banner2">
        <div className="banner-image2">
          <img src={banner2} alt="banner-image2" />
        </div>
        <div className="home-product-details2">
          <h1>Jewelry for your soul</h1>
          <strong>Lorem Ipsum Dolor Tempor</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore
            magna.
          </p>
          <Link to="/product">
            <button className="btn-shop2">Shop Men</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Home;
