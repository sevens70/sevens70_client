"use client";
import React, { useEffect } from "react";
// import Banner from "./Banner";
import Category from "./Category";
// import Shop from "./shop";
import Products from "./Products";
import Collection from "./Collection";
import TrendingProducts from "./TrendingProducts";
import Client from "./Client";
import NewArrival from "./NewArrival";
// import BlogNews from "./BlogNews";
import Brand from "./Brand";
import TopBanner from "../../../components/features/topBanners/topBannerPage";
function Home() {
  return (
    <div>
      {/* <Banner /> */}
      <TopBanner />
      <Category />
      {/* <Shop /> */}
      <Products />
      <NewArrival />
      <Collection />
      <TrendingProducts />
      <Client />
      {/* <BlogNews /> */}
      <Brand />
    </div>
  );
}

export default Home;
