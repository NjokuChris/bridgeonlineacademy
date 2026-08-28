"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded font-bold uppercase tracking-wide transition-colors duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variants = {
  primary: "bg-yellow text-ink hover:bg-yellow-hover focus-visible:ring-ink",
  secondary: "bg-navy text-white hover:bg-navy-deep focus-visible:ring-navy",
  outline:
    "border-2 border-navy text-navy hover:bg-navy hover:text-white focus-visible:ring-navy",
  ghost: "text-link hover:underline focus-visible:ring-link",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-6 py-3 text-[0.8125rem]",
  lg: "px-8 py-4 text-[0.9375rem]",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.01 }}>
        <Link
          href={href}
          className={classes}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.01 }}
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
