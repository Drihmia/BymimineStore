import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("h-6 w-6", props.className)}
    {...props}
  >
    <path d="M16.13 6.35c.37.37.52.88.37 1.37l-1.09 3.3a9.7 9.7 0 0 1-2.09.19c-1.3 0-2.5-.54-3.34-1.39a4.7 4.7 0 0 1-1.4-3.34c0-.37.04-.74.12-1.1h-1.6v6.92a6.92 6.92 0 0 0 6.92 6.92c3.81 0 6.92-3.11 6.92-6.92V6.35h-3.38v.01Z" />
    <path d="M12.87 2.12c.4 0 .78.16 1.05.44.28.28.44.65.44 1.05v6.5a2.5 2.5 0 0 1-2.5 2.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5c.16 0 .32.02.48.05V2.12h-1.04Z" />
  </svg>
);
export default TikTokIcon;
