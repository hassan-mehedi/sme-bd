import React from "react";

export default function ErrorMessage(props) {
  return (
    <div className={`alert alert-${props.variant || "infor"}`}>
      {props.children}
    </div>
  );
}
