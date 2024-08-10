// "use client";

import { Suspense } from "react";
import Cart from "../../components/pages/cart";
import Loader from "../../components/common/Loader";
export default function page() {
  return (
    <Suspense fallback={<Loader />}>
      {" "}
      <div
        className="mx-auto"
        style={{ height: "auto", backgroundColor: "#fff" }}
      >
        <Cart />
      </div>
    </Suspense>
  );
}
