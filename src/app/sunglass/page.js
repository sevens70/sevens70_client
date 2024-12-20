import { Suspense } from "react";
import ShopList from "../../components/pages/shopList";
import Loader from "../../components/common/Loader";
import LandingPageLayout from "../../components/Layouts/LandingPageLayout";
import Sunglass from "../../components/features/sunglass/Sunglass";
export default function MainPage() {
  return (
    // <DefaultLayout>
    <LandingPageLayout>
      <div
        className="mx-auto"
        style={{ height: "auto", backgroundColor: "#fff" }}
      >
        <Suspense fallback={<Loader />}>
          <div
            className="mx-auto"
            style={{ height: "auto", backgroundColor: "#fff" }}
          >
            <Suspense fallback={<Loader />}>
              <Sunglass />
            </Suspense>
          </div>
        </Suspense>
      </div>
    </LandingPageLayout>

    // </DefaultLayout>
  );
}
