import React from "react";
// import ProductsGrid from "./ProductsGrid";
import { useSelector } from "react-redux";

export default function ProductsGridController() {
  const posts = useSelector((state) => state.posts);
  console.log("Inside C " + {posts})
  return {posts};
}