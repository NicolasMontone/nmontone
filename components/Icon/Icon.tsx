import { Props } from './Icon.types'

import styles from './Icon.module.css'

const Icon = ({
  children,
  className,
  height,
  width,
  viewBox,
  fill,
  onClick,
}: Props): JSX.Element => (
  <svg
    className={`${styles.Icon} ${className || ''}`}
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    height={height}
    width={width}
    viewBox={viewBox}
    fill={fill}
  >
    {children}
  </svg>
)

export default Icon
