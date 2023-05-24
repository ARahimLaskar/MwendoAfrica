import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionType";

export const getData = () => {
  return function (dispatch, getState) {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
    });
    axios
      .get(`https://vehiches-data.onrender.com/vehicles`)
      .then((res) => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_PRODUCTS_FAILURE,
        });
      });
  };
};
