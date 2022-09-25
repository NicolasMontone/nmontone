import React from 'react'

import { Card } from '../Card'
import { Section } from '../Section'
import { SectionHeader } from '../SectionHeader'

import styles from './ProjectsSection.module.css'

const ProjectsSection = () => (
  <Section className={styles.ProjectsSection}>
    <div className={styles.intro}>
      <SectionHeader className={styles.title}>
        Projects <div className={styles.animatedIcon}>🧪</div>
      </SectionHeader>
    </div>
    <div className={styles.cards}>
      <Card
        title={'Picture in Popup'}
        description={
          <div>
            A cool chrome extension to see youtube videos, cameras/screens in
            Meet, and more! Made with TypeScript.
          </div>
        }
        href={'https://github.com/NicolasMontone/picture-in-popup'}
        className={styles.card}
      />
    </div>
  </Section>
)

export default ProjectsSection
