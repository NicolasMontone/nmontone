import type { NextPage } from 'next'
import { Description } from '../components/Description'

import { HomeHeader } from '../components/HomeHeader'
import { Page } from '../components/Page'

const Home: NextPage = () => (
  <Page
    title={'Nicolás Montone'}
    description={'Full stack developer, solving problems with technology!'}
  >
    <HomeHeader />
    <Description />
  </Page>
)

export default Home
