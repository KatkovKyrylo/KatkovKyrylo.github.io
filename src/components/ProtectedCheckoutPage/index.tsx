import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import CheckoutForm from "../CheckoutForm";

export interface ProtectedCheckoutPageProps {
  clientSecret: string | null;
  stripe: Stripe | null;
}

export default function ProtectedCheckoutPage({ clientSecret, stripe }: ProtectedCheckoutPageProps) {
  return clientSecret ? (
    <Elements options={{ clientSecret, appearance: { theme: "stripe" }, loader: "auto" }} stripe={stripe}>
      <CheckoutForm />
    </Elements>
  ) : (
    <div>
      <h1 className="text-red-500 text-xl  mb-2">Error: there's no clientSecret</h1>
      <Link className="hover:underline" to="/">
        Go to main page
      </Link>
    </div>
  );
}
