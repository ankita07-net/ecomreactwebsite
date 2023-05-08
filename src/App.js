import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/cart";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/product" Component={Product} />
        <Route path="/product/:id" Component={ProductDetails} />
        <Route path="/cart" Component={Cart} />
        <Route path="/checkout" Component={Checkout} />
        <Route path="/confirmation" Component={Confirmation} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
