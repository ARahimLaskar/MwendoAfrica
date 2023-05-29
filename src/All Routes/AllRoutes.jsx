import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";
import Products from "../Components/Products";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/productDetail" element={<ProductDetails />} />
    </Routes>
  );
}
