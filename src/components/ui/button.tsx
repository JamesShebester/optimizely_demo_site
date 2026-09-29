import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "outline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-dark-fir text-lf-green hover:bg-mid-fir",
  secondary: "bg-lf-green text-dark-fir hover:bg-grass",
  outline: "bg-transparent text-dark-fir border border-dark-fir hover:bg-neutral-3",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium tracking-tight transition-colors";

type ButtonProps = {
  variant?: Variant;
  href?: string;
  onClick?: () => void;
} & Omit<ComponentPropsWithoutRef<"button">, "onClick">;

export default function Button({
  variant = "primary",
  href,
  onClick,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      // Prefetch off: this ships as a static export with no Next server
      // behind it, so there's no RSC endpoint for prefetch to hit.
      <Link href={href} prefetch={false} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
