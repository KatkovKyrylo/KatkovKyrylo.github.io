import { useState, FormEvent } from "react";
import { useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js";
import SubmitButton from "../SubmitButton";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}${window.location.pathname}#complete`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as string);
    } else {
      console.log(error);
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement
        options={{
          layout: {
            type: "tabs",
            defaultCollapsed: false,
          },
        }}
        id="checkout-form-payment-element"
      />
      <SubmitButton className="mt-6" disabled={isLoading || !stripe || !elements} id="submit">
        Pay now
      </SubmitButton>

      {message && (
        <p className="text-red-500 mt-1" id="payment-message">
          {message}
        </p>
      )}
    </form>
  );
}

export default CheckoutForm;
