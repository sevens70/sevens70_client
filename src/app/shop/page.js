// "use client";

import { Suspense } from "react";
import ShopList from "../../components/pages/shopList";
import Loader from "../../components/common/Loader";
export default function MainPage() {
  return (
    <div
      className="mx-auto"
      style={{ height: "auto", backgroundColor: "#fff" }}
    >
      <Suspense fallback={<Loader/>}>
        <ShopList />
      </Suspense>
    </div>
  );
}
