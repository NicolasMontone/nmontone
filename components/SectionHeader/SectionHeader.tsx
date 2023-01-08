import React from 'react'

import { Props } from './SectionHeader.types'

import styles from './SectionHeader.module.css'

const SectionHeader = ({ children, className }: Props) => (
  <h1 className={`${styles.SectionHeader} ${className || ''}`}>{children}</h1>
)

export default SectionHeader
