import type { GetStaticProps } from 'next'
import Link from 'next/link'

import { Page } from '../components/Page'
import { Section } from '../components/Section'
import { locations } from '../lib/constants/locations'
import { getSortedPostsData, Post } from '../lib/posts'

import styles from '../styles/Blog.module.css'

const Blog = ({ allPostsData }: { allPostsData: Post[] }) => (
  <Page
    title={'Nicolás Montone - Blog'}
    description={
      'Some thoughts about technology, life, and everything in between.'
    }
    url={'/blog'}
  >
    <Section className={styles.Blog}>
      <h1 className={styles.title}>Things I want to share 🪄❤️</h1>
      <ul className={styles.postList}>
        {allPostsData.map(({ id, title, description, date, readIn }) => (
          <li key={id} className={styles.post}>
            <Link href={locations.posts(id)}>
              <a>
                <strong>{title}</strong>
                <div className={styles.description}>{description}</div>
              </a>
            </Link>
            <div>
              <small className={styles.date}>{date}</small> -{' '}
              <small className={styles.readIn}>{readIn}</small>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  </Page>
)

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default Blog
