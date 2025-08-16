import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g fill="currentColor" stroke="none">
        {/* Z */}
        <path d="M0 0 H25 L0 40 H-5 L20 0z" />
        {/* I */}
        <path d="M35 0 H40 V40 H35z" />
        {/* A */}
        <path d="M50 40 L62.5 0 L75 40 H70 L62.5 10 L55 40z" />
        {/* X */}
        <path d="M85 0 L97.5 20 L110 0 L115 0 L102.5 20 L115 40 L110 40 L97.5 20 L85 40 L80 40 L92.5 20 L80 0z" />
        {/* E */}
        <path d="M125 0 H145 V5 H125z M125 17.5 H140 V22.5 H125z M125 35 H145 V40 H125z M125 0 V40 H130 V0z" />
        {/* N */}
        <path d="M155 0 V40 H160 V0z M155 0 L175 40 H180 L160 0z M175 0 V40 H180 V0z" />
      </g>
    </svg>
  ),
};
