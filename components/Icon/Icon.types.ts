import { MouseEventHandler } from 'react'

export type Props = {
  className?: string
  children: React.ReactNode
  height?: string
  width?: string
  viewBox?: string
  fill?: string
  onClick?: MouseEventHandler<SVGSVGElement>
}
