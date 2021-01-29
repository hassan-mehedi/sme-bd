import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/rating";
import data from "../data";

export default function ProductScreen(props) {
  const item = data.products.find((i) => i._id === props.match.params.id);
  if (!item) {
    return <div> Products not found</div>;
  } else {
    return (
      <div>
        <Link to="/">Back to result</Link>
        <div className="row top">
          <div className="col-2">
            <img className="large" src={item.image} alt={item.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>
                <h1>{item.name}</h1>
              </li>
              <li>
                <Rating product={item} />
              </li>
              <li>Price: ${item.price}</li>
              <li>
                Description:
                <p>{item.description}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">${item.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Status</div>
                    <div>
                      {item.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Unavailable</span>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <button className="primary block">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
