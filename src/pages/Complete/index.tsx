import CheckedImage from "../../assets/checked.png";

export default function CompletePage() {
  return (
    <div className="flex max-w-xl mx-auto flex-col gap-2 text-center">
      <img className="size-24 mx-auto" src={CheckedImage} alt="checked" />
      <h1 className="font-bold text-2xl mt-5">Payment successful!</h1>
      <p>Please contact me using our communication channels to confirm.</p>
    </div>
  );
}
