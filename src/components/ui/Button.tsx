import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`rounded-lg bg-red-900 px-6 py-3 font-medium text-white transition hover:bg-red-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
