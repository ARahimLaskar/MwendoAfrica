import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionType";

export const getData = (filterValue, sortValue, pageNo) => {
  return function (dispatch, getState) {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
    });
    console.log(filterValue);
    let url = `https://vehiches-data.onrender.com/vehicles?_limit=12&_page=${pageNo}`;

    if (sortValue === "asc") {
      url += `&_sort=price&_order=asc`;
    } else if (sortValue === "desc") {
      url += `&_sort=price&_order=desc`;
    }

    if (filterValue === "car") {
      sortValue ? (url += `&type=car`) : (url += `&type=car`);
    } else if (filterValue === "bus") {
      sortValue ? (url += `&type=bus`) : (url += `&type=bus`);
    } else if (filterValue === "SUV") {
      sortValue ? (url += `&type=SUVs`) : (url += `&type=SUVs`);
    } else if (filterValue === "truck") {
      sortValue ? (url += `&type=pick_up`) : (url += `&type=pick_up`);
    } else if (filterValue === "all") {
      // sortValue ? (url += `&type=pick_up`) : (url += `?type=pick_up`);
      url += "";
    }

    axios
      .get(url)
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
