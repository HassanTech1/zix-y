import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4h16v16H4z" fill="currentColor" stroke="none" />
      <path
        d="M9.414 8L12 10.586 14.586 8 16 9.414 13.414 12 16 14.586 14.586 16 12 13.414 9.414 16 8 14.586 10.586 12 8 9.414 9.414 8z"
        fill="hsl(var(--background))"
        stroke="none"
      />
    </svg>
  ),
};
