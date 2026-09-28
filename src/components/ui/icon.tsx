import Image from "next/image";

type IconProps = {
  name: string;
  tone?: "dark" | "light";
  size?: number;
};

/**
 * Renders a feature icon from /public/icons. Files come in matched
 * Dark (#08251A, for light backgrounds) / Light (#FFFFFF, for dark
 * backgrounds) pairs — pick `tone` to match the section it sits in.
 */
export default function Icon({ name, tone = "dark", size = 40 }: IconProps) {
  const variant = tone === "dark" ? "Dark" : "Light";
  return (
    <Image
      src={`/icons/${name}_600x600_${variant}.svg`}
      alt=""
      width={size}
      height={size}
    />
  );
}
