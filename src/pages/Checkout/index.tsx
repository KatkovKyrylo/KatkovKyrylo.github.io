import { Elements } from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm";
import { dollarsToCents } from "../../utils/dollarsToCents";
import { CREATE_PAYMENT } from "../../endpoints";

export interface ProtectedCheckoutPageProps {
  setSecretPayload: any;
  secretPayload: { secret: string, amount: number, currency: 'usd' | 'eur' } | null;
  stripe: Stripe | null;
}

export default function ProtectedCheckoutPage({ secretPayload, setSecretPayload, stripe }: ProtectedCheckoutPageProps) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (secretPayload) {
      setIsLoading(false);
      return;
    }

    if (!secretPayload) {
      const params = new URLSearchParams(location.search);
      const amount = params.get('amount');
      const currency = params.get('currency');
      const amountNumber = Number(amount);
      const amountInCents = dollarsToCents(amountNumber);

      if (amountInCents) {
        axios
          .post(CREATE_PAYMENT, { currency, amount: amountInCents })
          .then(({ data }) => {
            setSecretPayload({
              currency,
              amount: amountInCents,
              secret: data.clientSecret,
            });
          })
          .catch((err) => console.error("Error fetching clientSecret:", err))
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  }, []);

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return secretPayload ? (
    <div>
      <div className="bg-gray-800 py-12 px-12 p-6 rounded-md">
        <div>
          Total
        </div>
        <div className="text-xl">
          { Number(secretPayload.amount / 100).toFixed(2) } { secretPayload.currency.toUpperCase() }
        </div>
      </div>
      <div className="bg-gray-800 mt-6 py-12 px-12 p-6 rounded-md">
        <Elements options={{ clientSecret: secretPayload.secret as string, appearance: { theme: "night" }, loader: "auto" }} stripe={stripe}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  ) : (
    <div>
      <h1 className="text-red-500 text-xl  mb-2">Error: there's no clientSecret</h1>
      <Link className="hover:underline" to="/">
        Go to main page
      </Link>
    </div>
  );
}
