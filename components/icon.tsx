import { HTMLAttributes } from 'react'

interface IconProps extends HTMLAttributes<HTMLSpanElement> {}

export const CalendarIcon = (props: IconProps) => (
  <span {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="1em"
      height="1em"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </span>
)

export const ListIcon = (props: IconProps) => (
  <span {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="1em"
      height="1em"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  </span>
)

export const GithubIcon = (props: IconProps) => (
  <span {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  </span>
)

export const JuejinIcon = (props: IconProps) => (
  <span {...props}>
    <svg width="1em" height="1em" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.293 7.583L19.017 5l-3.422 2.699-.178.143 3.6 2.87 3.612-2.87-.336-.259zm12.415 10.018l-15.7 12.38-15.69-12.373L1 19.47l18.008 14.199 18.018-14.207-2.318-1.861zm-15.7 1.004l-8.544-6.736-2.317 1.861 10.86 8.564 10.871-8.572-2.317-1.861-8.553 6.744z"
        fill="#006CFF"
        fillRule="evenodd"
      />
    </svg>
  </span>
)

export const ArrowTopRight = (props: IconProps) => (
  <span {...props}>
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 13.9633H16V7.96331H10V9.96331H12.5858L7.25623 15.2929L8.67044 16.7071L14 11.3775V13.9633Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19ZM19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z"
        fill="currentColor"
      />
    </svg>
  </span>
)

export const CornerLeftUp = (props: IconProps) => (
  <span {...props}>
    <svg width="1em" height="1me" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.71 10.6254L16.1229 9.20989L9.7531 2.85181L3.39502 9.22164L4.81054 10.6346L8.59179 6.84631L8.60131 17.152C8.60335 19.3611 10.3959 21.1503 12.605 21.1483L20.605 21.1409L20.6032 19.1409L12.6032 19.1483C11.4986 19.1493 10.6023 18.2547 10.6013 17.1501L10.5915 6.51446L14.71 10.6254Z"
        fill="currentColor"
      />
    </svg>
  </span>
)
