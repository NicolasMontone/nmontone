import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { Page } from '../../components/Page'
import { Section } from '../../components/Section'
import { locations } from '../../lib/constants/locations'
import { getAllPostIds, getPostData, Post as PostType } from '../../lib/posts'

import styles from '../../styles/Post.module.css'

export default function Post({
  postData: { date, contentHtml, title, description },
}: {
  postData: PostType
}) {
  return (
    <Page title={title} description={description}>
      <Section className={styles.Post}>
        <article>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.date}>{date}</div>
          <div
            className={styles.articleData}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
        <div className={styles.goBack}>
          <Link href={locations.blog()}>cd ..</Link>
        </div>
      </Section>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params === undefined) {
    return {
      props: {},
    }
  }
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}
