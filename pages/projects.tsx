import type { NextPage } from 'next'

import { Page } from '../components/Page'
import { ProjectsSection } from '../components/ProjectsSection'
import { buildOgImageUrl } from '../lib/constants/ogImage'

const Projects: NextPage = () => (
  <Page
    title={'Nicolás Montone - projects'}
    description={
      'Some of my projects, some ideas, some experiments, some fun! All of them are open source!'
    }
    url={'/projects'}
    image={buildOgImageUrl('My Projects!')}
  >
    <ProjectsSection />
  </Page>
)

export default Projects
