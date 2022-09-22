import styles from './Section.module.css'

import { Props } from './Section.types'

const Section = ({ className = '', children }: Props): JSX.Element => (
  <section>
    <div className={`${styles.Section} ${className || ''}`}>{children}</div>
  </section>
)

export default Section
