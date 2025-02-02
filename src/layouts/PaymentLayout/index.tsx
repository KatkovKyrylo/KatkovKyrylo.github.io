import { Outlet } from "react-router-dom";

export default function PaymentLayout() {
  return (
    <div className="relative mt-20 mb-20 w-full bg-gray-800 2xl:min-w-[700px] 2xl:mx-auto py-12 px-12 p-6 rounded-md">
      <Outlet />
    </div>
  );
}