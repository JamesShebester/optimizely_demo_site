import type { ComponentPropsWithoutRef } from "react";
import Image from "next/image";

type SectionProps = {
  bg?: "white" | "neutral" | "dark" | "green";
  image?: string;
} & ComponentPropsWithoutRef<"section">;

const bgClasses: Record<NonNullable<SectionProps["bg"]>, string> = {
  white: "bg-neutral-1 text-dark-fir",
  neutral: "bg-neutral-3 text-dark-fir",
  dark: "bg-dark-fir text-neutral-1",
  green: "bg-lf-green text-dark-fir",
};

export default function Section({
  bg = "white",
  image,
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={`relative overflow-hidden ${bgClasses[bg]} ${className}`}
      {...props}
    >
      {image && (
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="relative mx-auto max-w-6xl px-6 py-20">{children}</div>
    </section>
  );
}
