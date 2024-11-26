import { Suspense } from "react";
import ShopList from "../../components/pages/shopList";
import Loader from "../../components/common/Loader";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Sunglass from "../../components/features/sunglass/Sunglass";
export default function MainPage() {
  return (
    // <DefaultLayout>
    <div
      className="mx-auto"
      style={{ height: "auto", backgroundColor: "#fff" }}
    >
      <Suspense fallback={<Loader />}>
        <Sunglass />
      </Suspense>
    </div>
    // </DefaultLayout>
  );
}
