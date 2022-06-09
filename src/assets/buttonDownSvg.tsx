import React, { ReactElement } from "react"

export const ButtonDownSvg = ({
  className,
  onClick,
}: {
  className?: string
  onClick?: React.MouseEventHandler<SVGSVGElement>
}): ReactElement => (
  <svg
    className={className}
    onClick={onClick}
    width='34'
    height='34'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='17' cy='17' r='16' fill='white' stroke='#9EC5FE' strokeWidth='2' />
    <path
      d='M12.41 13.2949L17 17.8749L21.59 13.2949L23 14.7049L17 20.7049L11 14.7049L12.41 13.2949Z'
      fill='#9EC5FE'
    />
  </svg>
)
