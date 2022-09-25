import React from 'react'

import { Section } from '../Section'

import styles from './HomeHeader.module.css'

const HomeHeader = () => (
  <Section className={styles.HomeHeader}>
    <h1 id={'title'} className={styles.title}>
      Nicolás Montone
    </h1>
    <p className={styles.lead}>Just doing magic stuff ✨</p>
  </Section>
)

export default HomeHeader
