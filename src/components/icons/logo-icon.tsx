import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={cn("h-10 w-10", props.className)}
    {...props}
  >
    <circle cx="50" cy="50" r="50" fill="#F06292" />
    <text
      x="50"
      y="58"
      fontFamily="cursive"
      fontSize="22"
      fill="white"
      textAnchor="middle"
      fontWeight="bold"
    >
      By Mimine
    </text>
  </svg>
);

export default LogoIcon;
