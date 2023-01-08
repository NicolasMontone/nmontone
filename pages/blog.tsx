import type { NextPage } from 'next'

import { Page } from '../components/Page'
import { Section } from '../components/Section'

const Projects: NextPage = () => (
  <Page
    title={'Nicolás Montone - Blog'}
    description={
      'Some thoughts about technology, life, and everything in between.'
    }
    url={'/blog'}
  >
    <Section>
      <h1>Still in progress 👩‍💻</h1>
    </Section>
  </Page>
)

export default Projects
