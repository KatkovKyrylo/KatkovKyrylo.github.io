import PaymentDetailsForm from "../../components/PaymentDetailsForm";

export interface DeveloperInfoPageProps {
  setClientSecret: any;
}

export default function DeveloperInfoPage(props: DeveloperInfoPageProps) {
  return (
    <>
      <PaymentDetailsForm setClientSecret={props.setClientSecret} />
    </>
  );
}
