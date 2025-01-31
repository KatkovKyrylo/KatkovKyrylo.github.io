import classNames from "classnames";
import { HTMLAttributes, ChangeEvent } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value?: string | number;
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      type="text"
      {...props}
      className={classNames(
        "w-full h-12 border-2 text-black rounded-md px-3 text-lg hover:border-slate-400 focus:outline-slate-400",
        className
      )}
    />
  );
}
