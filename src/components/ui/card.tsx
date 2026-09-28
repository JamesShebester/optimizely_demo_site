import type { ComponentPropsWithoutRef } from "react";

type CardProps = {
  tone?: "neutral" | "green" | "dark" | "blue";
} & ComponentPropsWithoutRef<"div">;

const toneClasses: Record<NonNullable<CardProps["tone"]>, string> = {
  neutral: "bg-neutral-2 text-dark-fir",
  green: "bg-lf-green text-dark-fir",
  dark: "bg-dark-fir text-neutral-1",
  blue: "bg-light-blue text-dark-fir",
};

export default function Card({
  tone = "neutral",
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`brand-corners p-8 ${toneClasses[tone]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
