import classNames from "classnames";
import { Link } from "react-router-dom";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

export default function Button({ children, className, href, ...props }: SubmitButtonProps) {
  const commonClasses = classNames(
    "w-full h-11 px-3 text-lg flex justify-center items-center uppercase font-semibold bg-green-500 text-white rounded-md transition-colors duration-200 hover:bg-green-600 disabled:opacity-70 disabled:pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link to={href} className={commonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type="submit" className={commonClasses} {...props}>
      {children}
    </button>
  );
}
