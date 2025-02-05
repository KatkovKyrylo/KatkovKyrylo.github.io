import Title from "../Title";
import Socials from "../Socials";
import { useIsPage } from "../../hooks/useIsPage.hook";
import { useIsMobile } from "../../hooks/useIsMobile";

export interface HeroProps {
  name: string;
  position: string;
  avatar: string;
  description: string;
}

export default function Hero({ name, avatar, position, description }: HeroProps) {
  const isPaymentPage = useIsPage(["/pay", "/checkout", "/complete"]);
  const isMobile = useIsMobile();

  return (
    <div
      id="about"
      className=" flex flex-col items-left text-left gap-5 relative pb-3 lg:text-center lg:items-center">
      <div>
        <Title variant="h1" className="text-left">
          {name}
        </Title>
        <p className="text-xl text-left mb-8">{position}</p>
        <img
          className="mt-3 w-full max-h-72 rounded-md mx-0 object-cover lg:mx-auto"
          src={avatar}
          alt="developer avatar"
        />
        {!(isMobile && isPaymentPage) && <p className="mt-4 text-left">{description}</p>}
      </div>
      <div className="w-full h-[2px] bg-green-400" />
      <Socials className="hidden lg:flex" />
    </div>
  );
}
