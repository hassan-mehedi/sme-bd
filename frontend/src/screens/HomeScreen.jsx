import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/product";
import ErrorMessage from "../components/ErrorMessage";
import LoadingBox from "../components/LoadingBox";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <ErrorMessage variant="danger">{error}</ErrorMessage>
      ) : (
        <div className="row center">
          {products.map((item) => (
            <Products key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

//Hey adding things
