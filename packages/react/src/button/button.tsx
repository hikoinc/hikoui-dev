"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName?: string;
}

const Button = ({ children, className, appName }: ButtonProps) => {
  const handleClick = () => {
    alert(`Hello from your ${appName ?? "new"} app!`);
  };

  return (
    <button className={className} onClick={handleClick} type="button">
      {children}
    </button>
  );
};

export default Button;
