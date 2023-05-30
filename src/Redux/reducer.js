import {
  ADD_PRODUCT_DETAILS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  product: {},
  cart: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        products: action.payload,
      };
    }
    case ADD_PRODUCT_DETAILS: {
      return {
        ...state,
        product: action.payload,
      };
    }
    default:
      return state;
  }
};
