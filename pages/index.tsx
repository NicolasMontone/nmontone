import type { NextPage } from 'next'

import { HomeHeader } from '../components/HomeHeader'
import { Page } from '../components/Page'

const Home: NextPage = () => {
  return (
    <Page title={'Nicolás Montone'} description={'My amazing page'}>
      <HomeHeader />
    </Page>
  )
}

export default Home
