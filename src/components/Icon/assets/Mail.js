import React from 'react'

export const Mail = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM12 13L4 8V18H20V8L12 13Z"
        fill="black"
      />
      <mask
        id="mail"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="4"
        width="20"
        height="16"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM12 13L4 8V18H20V8L12 13Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mail)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}
