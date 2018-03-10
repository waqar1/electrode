import React from "react";
import { Route } from "react-router";
import Home from "./components/home";
import ProductList from "./components/productList";
import ProductDetails from "./components/ProductDetails";

export const routes = <Route path="/" component={Home} />;
