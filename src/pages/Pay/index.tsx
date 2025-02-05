import PaymentDetailsForm from "../../components/PaymentDetailsForm";

export interface DeveloperInfoPageProps {
  setSecretPayload: any;
}

export default function PayPage(props: DeveloperInfoPageProps) {
  return (
    <div className="flex flex-col bg-gray-800 py-12 px-12 p-6 rounded-md">
      <PaymentDetailsForm setSecretPayload={props.setSecretPayload} />
    </div>
  );
}
