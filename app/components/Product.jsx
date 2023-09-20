import React from "react";

const Product = ({ product: { title, description, url, price } }) => {
  return <div>{title}</div>;
};

export default Product;
