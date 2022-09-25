import type { NextPage } from 'next'

import { HomeHeader } from '../components/HomeHeader'
import { Page } from '../components/Page'
import { ProjectsSection } from '../components/ProjectsSection'

const Home: NextPage = () => (
  <Page
    title={'Nicolás Montone'}
    description={
      'Full stack developer, working with TypeScript, React, Next.JS, NodeJS, Redux, Serverless and more!'
    }
  >
    <HomeHeader />
    <ProjectsSection />
  </Page>
)

export default Home
