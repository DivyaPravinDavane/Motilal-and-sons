import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  href?: string;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  asLink = false,
  href,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-[#A67C45] hover:bg-[#8F6632] text-white border border-[#A67C45] shadow-[0_2px_10px_rgba(166,124,69,0.15)]",
    outline:
      "bg-transparent text-[#29241F] border border-[#BCA17B] hover:border-[#A67C45] hover:text-[#A67C45] hover:bg-[#A67C45]/5",
    ghost:
      "bg-transparent text-[#29241F] hover:text-[#A67C45] border-transparent",
    dark:
      "bg-[#29241F] hover:bg-[#1A1613] text-[#FFFDF8] border border-[#29241F]",
  };

  const sizeClasses = {
    sm: "text-[11px] tracking-widest uppercase px-4 py-2 font-medium",
    md: "text-[12px] tracking-[0.2em] uppercase px-6 py-3 font-medium",
    lg: "text-[13px] tracking-[0.22em] uppercase px-8 py-3.5 font-medium",
  };

  const baseClasses =
    "inline-flex items-center justify-center transition-all duration-300 select-none cursor-pointer text-center";

  if (asLink && href) {
    return (
      <a
        href={href}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
