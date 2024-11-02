"use client";
import React from "react";
import Categories from "../../../components/features/categories/Categories";
function Category() {
  return (
    <section className="w-11/12 mt-15 pb-10 relative md:w-10/12 mx-auto">
      <h3 className="text-center text-xmd my-10">Popular Category</h3>
      <Categories />
    </section>
  );
}

export default Category;
