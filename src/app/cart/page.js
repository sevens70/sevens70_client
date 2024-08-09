// "use client";

import { Suspense } from "react";
import Cart from "../../components/pages/cart";
function SearchBarFallback() {
  return <>placeholder</>;
}
export default function page() {
  return (
    <Suspense fallback={<SearchBarFallback />}>
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
