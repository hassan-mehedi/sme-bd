import React from "react";
import Rating from "./rating";

const Product = (props) => {
  return (
    <div className="card">
      <a href={`/item/${props.item._id}`}>
        <img className="medium" src={props.item.image} alt={props.item.name} />
      </a>
      <div className="card-body">
        <a href={`/props.item/${props.item._id}`}>
          <h2>{props.item.name}</h2>
        </a>
        <Rating product={props.item} />
        <div className="price">{props.item.price}</div>
      </div>
    </div>
  );
};

export default Product;
