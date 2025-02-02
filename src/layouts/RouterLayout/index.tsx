import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import CompletePage from "../../pages/CompletePage";
import ProtectedCheckoutPage from "../../components/ProtectedCheckoutPage";
import PaymentLayout from "../PaymentLayout";
import Layout from "../Layout/layout.component";
import DeveloperInfoPage from "../../pages/DeveloperInfoPage";
import DevInfoProvider from "../../contexts/dev-info.provider";
import DeveloperPayPage from "../../pages/Pay";

export default function RouterLayout() {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY as string)
      .then((data: any) => setStripe(data))
      .catch((err: any) => console.log("Error loading Stripe:", err));
  }, []);

  return (
    <Router>
      <DevInfoProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DeveloperInfoPage />} />
            <Route element={<PaymentLayout />}>
              <Route path="/pay" element={<DeveloperPayPage setClientSecret={setClientSecret} />} />
              <Route path="/complete" element={<CompletePage />} />
              <Route path="/checkout" element={<ProtectedCheckoutPage clientSecret={clientSecret} stripe={stripe} />} />
            </Route>
          </Route>
        </Routes>
      </DevInfoProvider>
    </Router>
  );
}
