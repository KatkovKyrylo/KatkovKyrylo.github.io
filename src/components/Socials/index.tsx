import { TSocials } from "../../types/TSocials";
import UpworkIcon from "../../assets/upwork.svg?react";
import EmailIcon from "../../assets/email.svg?react";
import GithubIcon from "../../assets/github.svg?react";

export interface SocialsProps {
  socials: TSocials;
  className?: string;
}

export default function Socials({ socials, className }: SocialsProps) {
  return (
    <div className={`flex gap-3  ${className}`}>
      <a target="_blank" href={socials.upwork}>
        <UpworkIcon className="size-10 brightness-75 hover:brightness-100 transition-all duration-300" />
      </a>
      <a target="_blank" href={socials.github}>
        <GithubIcon className="size-10 brightness-75 hover:brightness-100 transition-all duration-300" />
      </a>
      <a target="_blank" href={socials.email}>
        <EmailIcon className="size-10 brightness-75 hover:brightness-100 transition-all duration-300" />
      </a>
    </div>
  );
}
