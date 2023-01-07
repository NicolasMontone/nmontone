import React from 'react'

import { Card } from '../Card'
import { Section } from '../Section'
import { SectionHeader } from '../SectionHeader'
import { Project, projects } from '../../lib/constants/projects'

import styles from './ProjectsSection.module.css'

const ProjectsSection = () => (
  <Section className={styles.ProjectsSection}>
    <div className={styles.intro}>
      <SectionHeader className={styles.title}>
        Projects <div className={styles.animatedIcon}>🧪</div>
      </SectionHeader>
    </div>
    <div className={styles.cards}>
      {projects.map(({ title, description, subtitle, link }: Project) => (
        <Card
          key={title}
          subtitle={subtitle}
          title={title}
          description={description}
          href={link}
          className={styles.card}
        />
      ))}
    </div>
  </Section>
)

export default ProjectsSection
