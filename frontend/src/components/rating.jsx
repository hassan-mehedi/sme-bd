import React from "react";

export default function Rating(props) {
  const { ratings, numberOfReviews } = props.product;
  return (
    <div className="rating">
      <span>
        <i
          className={
            ratings >= 1
              ? "fa fa-star"
              : ratings >= 0.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratings >= 2
              ? "fa fa-star"
              : ratings >= 1.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratings >= 3
              ? "fa fa-star"
              : ratings >= 2.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratings >= 4
              ? "fa fa-star"
              : ratings >= 3.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratings === 5
              ? "fa fa-star"
              : ratings >= 4.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>{" " + numberOfReviews + " reviews"}</span>
    </div>
  );
}
