import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartContants";

export const addToCart = (itemId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${itemId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (itemId) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: itemId,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
