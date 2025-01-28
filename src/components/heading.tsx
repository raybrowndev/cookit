import React from "react";

interface HeadingProps {
  children: string;
  variant?: "light" | "dark";
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, variant = "dark", className = "" }) => {
  const baseStyles = "text-3xl font-bold sm:truncate sm:text-4xl sm:tracking-tight";
  const variantStyles = variant === "dark" ? "text-gray-900" : "text-gray-200";
  return (
    <h1 className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </h1>
  );
};

const Heading2: React.FC<HeadingProps> = ({ children, variant = "dark", className = "" }) => {
  const baseStyles = "text-2xl font-semibold sm:truncate sm:text-3xl sm:tracking-tight";
  const variantStyles = variant === "dark" ? "text-gray-900" : "text-gray-200";
  return (
    <h2 className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </h2>
  );
};

const Heading3: React.FC<HeadingProps> = ({ children, variant = "dark", className = "" }) => {
  const baseStyles = "text-xl font-medium sm:truncate sm:text-2xl sm:tracking-tight";
  const variantStyles = variant === "dark" ? "text-gray-900" : "text-gray-200";
  return (
    <h3 className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </h3>
  );
};

export { Heading, Heading2, Heading3 };
