// "use client";
// import PlaceOrder from "../../components/pages/PlaceOrder";
import Checkout from "../../components/pages/PlaceOrder/Checkout";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
export default function Page() {
  return (
    <DefaultLayout>
      <div className="mx-auto">
        {/* <PlaceOrder /> */}
        <Checkout />
      </div>
    </DefaultLayout>
  );
}
