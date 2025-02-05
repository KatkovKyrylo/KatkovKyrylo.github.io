import { Outlet } from "react-router-dom";

export default function PaymentLayout() {
  return (
    <div className="relative mt-20 mb-20 w-full 2xl:min-w-[700px] lg:mt-0 2xl:mx-auto">
      <Outlet />
    </div>
  );
}
