import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductView />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
