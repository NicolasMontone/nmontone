import styles from './Section.module.css'

import { Props } from './Section.types'

const Section = ({
  className = '',
  children,
  fixedWidth = true,
}: Props): JSX.Element => (
  <section
    className={`${styles.Section} ${className || ''} ${
      fixedWidth ? styles.fixedWidth : ''
    }`}
  >
    {children}
  </section>
)

export default Section
