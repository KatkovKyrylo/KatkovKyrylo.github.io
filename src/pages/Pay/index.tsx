import PaymentDetailsForm from "../../components/PaymentDetailsForm";

export interface DeveloperInfoPageProps {
  setClientSecret: any;
}

export default function PayPage(props: DeveloperInfoPageProps) {
  return (
    <div className="max-w-xl mx-auto flex flex-col">
      <PaymentDetailsForm setClientSecret={props.setClientSecret} />
    </div>
  );
}
