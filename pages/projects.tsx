import type { NextPage } from 'next'

import { Page } from '../components/Page'
import { ProjectsSection } from '../components/ProjectsSection'

const Projects: NextPage = () => (
  <Page
    title={'Nicolás Montone - projects'}
    description={
      'Some of my projects, some ideas, some experiments, some fun! All of them are open source!'
    }
    url={'/projects'}
  >
    <ProjectsSection />
  </Page>
)

export default Projects
