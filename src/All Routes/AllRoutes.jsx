import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";
import Products from "../Components/Products";
import Payment from "../Components/Payment";
import Invoice from "../Components/Invoice";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/productDetail" element={<ProductDetails />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/invoice" element={<Invoice />} />
    </Routes>
  );
}
