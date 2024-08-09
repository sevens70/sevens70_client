// "use client";

import { Suspense } from "react";
import ShopList from "../../components/pages/shopList";
function SearchBarFallback() {
  return <>placeholder</>;
}
export default function MainPage() {
  return (
    <div
      className="mx-auto"
      style={{ height: "auto", backgroundColor: "#fff" }}
    >
      <Suspense fallback={<SearchBarFallback />}>
        <ShopList />
      </Suspense>
    </div>
  );
}
