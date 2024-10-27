// "use client";

import OrdersList from "../../components/pages/ordersList";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
export default function Page() {
  return (
    <DefaultLayout>
      <div className="mx-auto">
        <OrdersList />
      </div>
    </DefaultLayout>
  );
}
