import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Shop from "./shop";
import Products from "./Products";
import Collection from "./Collection";
import TrendingProducts from "./TrendingProducts";

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Shop />
      <Products />
      <Collection />
      <TrendingProducts />
    </div>
  );
}

export default Home;
