import classNames from "classnames";
import React from "react";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  value?: string | number;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      type="text"
      {...props}
      className={classNames(
        "w-full h-12 border-2 rounded-md px-3 text-lg hover:border-slate-400 focus:outline-slate-400",
        className
      )}
    />
  );
}
