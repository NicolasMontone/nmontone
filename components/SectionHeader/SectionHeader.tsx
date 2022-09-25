import React from 'react'

import { Props } from './SectionHeader.types'

import styles from './SectionHeader.module.css'

const SectionHeader = ({ children, className }: Props) => (
  <h2 className={`${styles.SectionHeader} ${className || ''}`}>{children}</h2>
)

export default SectionHeader
