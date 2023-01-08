import styles from './Section.module.css'

import { Props } from './Section.types'

const Section = ({ className = '', children }: Props): JSX.Element => (
  <section className={`${styles.Section} ${className || ''}`}>
    {children}
  </section>
)

export default Section
