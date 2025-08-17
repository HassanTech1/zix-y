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
        {/* A */}
        <path d="M0 40 L12.5 0 L25 40 H20 L12.5 10 L5 40z" />
        {/* L */}
        <path d="M35 0 V40 H40 V5 H55 V0z" />
        {/* H */}
        <path d="M65 0 V40 H70 V22.5 H85 V40 H90 V0 H85 V17.5 H70 V0z" />
        {/* A */}
        <path d="M100 40 L112.5 0 L125 40 H120 L112.5 10 L105 40z" />
        {/* S */}
        <path d="M145 0 Q130 0 135 20 T150 40 H155 Q165 40 160 20 T145 0zm5 5 Q155 5 155 18 T140 35 H138 Q130 35 138 22 T150 5z" />
        {/* A */}
        <path d="M170 40 L182.5 0 L195 40 H190 L182.5 10 L175 40z" />
        {/* N */}
        <path d="M205 0 V40 H210 V0z M205 0 L225 40 H230 L210 0z M225 0 V40 H230 V0z" />
        {/* AI */}
        <path d="M240 0 V40 H245 V0z" />
        <path d="M248 15 V40 H253 V15z M248 0 V10 H253 V0z" />
      </g>
    </svg>
  ),
};
