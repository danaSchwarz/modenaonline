import * as React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Favorites from "./Favorites/Favorites.jsx";
import SignIn from './SignIn/SignIn.jsx';
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Products from "./Products";
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import ProductDetailInfo from "./ProductDetails/ProductDetailInfo.jsx";
import ProductDetailDescription from "./ProductDetails/ProductDetailDescription.jsx";
import ProductDetailMaterial from "./ProductDetails/ProductDetailMaterial.jsx";
import NotFound from "./NotFound.jsx";
import Cart from "./Cart/Cart.jsx";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/modenaonline" element={<Navigate to="/" replace={true} />} />

      <Route path="/about" element={<About />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/products/:id" element={<ProductDetails />}>
        <Route path="" element={<ProductDetailInfo />}></Route>
        <Route path="description" element={<ProductDetailDescription />}></Route>
        <Route path="material" element={<ProductDetailMaterial />}></Route>
      </Route>
      <Route path="/signIn" element={<SignIn />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}