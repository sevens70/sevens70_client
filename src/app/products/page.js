import React from "react";
import ProductsList from "../../components/pages/products/index";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
export default function page() {
  return (
    <DefaultLayout>
      <ProductsList />
    </DefaultLayout>
  );
}
