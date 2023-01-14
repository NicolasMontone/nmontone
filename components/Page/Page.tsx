import { Footer } from '../Footer'
import { Head } from '../Head'
import { Navbar } from '../Navbar'
import { Props } from './Page.types'

const Page = ({ children, title, description, url }: Props) => (
  <div>
    <Head title={title} description={description} path={url} />
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default Page
