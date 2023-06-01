import {
    // PRODUCT_CREATE_REVIEW_FAIL,
    // PRODUCT_CREATE_REVIEW_REQUEST,
    // PRODUCT_CREATE_REVIEW_RESET,
    // PRODUCT_CREATE_REVIEW_SUCCESS,
    // PRODUCT_DETAILS_FAIL,
    // PRODUCT_DETAILS_REQUEST,
    // PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
  } from "../Constants/ProductConstants";
  
  // PRODUCT LIST
  export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] };
      case PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
        };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
