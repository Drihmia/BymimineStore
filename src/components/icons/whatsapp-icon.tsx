import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("h-6 w-6", props.className)}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M18.425 5.575a9.95 9.95 0 1 0-12.85 12.85A9.95 9.95 0 0 0 18.425 5.575ZM3.05 3.05a12 12 0 0 1 17.793 16.133L22 22l-2.817-1.127a12 12 0 0 1-16.133-17.793Zm8.941 2.941a.9.9 0 0 0-1.272.248l-.736 1.272a.9.9 0 0 1-.77.498 8.13 8.13 0 0 0-3.387 3.387.9.9 0 0 1-.498.77l-1.272.736a.9.9 0 0 0-.248 1.272l1.98 3.43a.9.9 0 0 0 1.273.497l1.37-.547a.9.9 0 0 1 .863.076 6.37 6.37 0 0 0 3.23.868.9.9 0 0 1 .868.863l.547 1.37a.9.9 0 0 0 .497 1.273l3.43 1.98a.9.9 0 0 0 1.272-.248l.736-1.272a.9.9 0 0 1 .77-.498 8.13 8.13 0 0 0 3.387-3.387.9.9 0 0 1 .498-.77l1.272-.736a.9.9 0 0 0 .248-1.272l-1.98-3.43a.9.9 0 0 0-1.273-.497l-1.37.547a.9.9 0 0 1-.863-.076 6.37 6.37 0 0 0-3.23-.868.9.9 0 0 1-.868-.863l-.547-1.37a.9.9 0 0 0-.497-1.273l-3.43-1.98Z"
      clipRule="evenodd"
    />
  </svg>
);

export default WhatsAppIcon;
