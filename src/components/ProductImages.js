import "./css/Home.css";
import { Link } from "react-router-dom";

function ProductImages(props) {
  return (
    <div className="home-content">
      <div className="content-wrapper">
        {props.details.map((item) => (
          <figure className="home-image" key={item.id}>
            <Link to="/product">
              <img src={item.image} alt={item.title} />
            </Link>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
