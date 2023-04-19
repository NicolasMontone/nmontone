import type { GetStaticProps } from 'next'
import Link from 'next/link'

import { Page } from '../components/Page'
import { Section } from '../components/Section'
import { locations } from '../lib/constants/locations'
import { buildOgImageUrl } from '../lib/constants/ogImage'
import { getSortedPostsData, Post } from '../lib/posts'

import styles from '../styles/Blog.module.css'

const Blog = ({ posts }: { posts: Post[] }) => (
  <Page
    title={'Nicolás Montone - Blog'}
    url={'/blog'}
    image={buildOgImageUrl('Blog')}
  >
    <Section className={styles.Blog}>
      <h1 className={styles.title}>Things I want to share</h1>
      {posts.length > 0 ? (
        <ul className={styles.postList}>
          {posts.map(({ id, title, description, date, readIn }) => (
            <li key={id} className={styles.post}>
              <Link href={locations.posts(id)}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.description}>{description}</div>
              </Link>
              <div>
                <small className={styles.date}>{date}</small> -{' '}
                <small className={styles.readIn}>{readIn}</small>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No post yet! I{"'"}m preparing some amazing stuff for you!</h3>
      )}
    </Section>
  </Page>
)

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData()
  return {
    props: {
      posts,
    },
  }
}

export default Blog
