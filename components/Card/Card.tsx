import React from 'react'

import { Props } from './Card.types'

import styles from './Card.module.css'

const Card = ({ title, description, subtitle, className, href }: Props) => (
  <div className={`${styles.Card} ${className || ''}`}>
    <a
      href={href}
      className={styles.linkBox}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className={styles.title}>{title}</div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.description}>{description}</div>
    </a>
  </div>
)

export default Card
