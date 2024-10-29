import React from "react";
import ProductsList from "../../components/pages/products/index";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Loader from "../../components/common/Loader";
import { Suspense } from "react";
export default function page() {
  return (
    <DefaultLayout>
      <Suspense fallback={<Loader />}>
        <ProductsList />
      </Suspense>
    </DefaultLayout>
  );
}
