import React from "react";
import Rating from "./rating";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="card">
      <Link to={`/item/${props.item._id}`}>
        <img className="medium" src={props.item.image} alt={props.item.name} />
      </Link>
      <div className="card-body">
        <Link to={`/props.item/${props.item._id}`}>
          <h2>{props.item.name}</h2>
        </Link>
        <Rating product={props.item} />
        <div className="price">{props.item.price}</div>
      </div>
    </div>
  );
};

export default Product;
