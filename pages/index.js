import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
  host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST
})

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries({
      content_type: 'post',
      order: '-fields.date',
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
      <>
        <Head>
          <title>Next.js + Contentful</title>
          <link
              rel="stylesheet"
              href="https://css.zeit.sh/v1.css"
              type="text/css"
          />
        </Head>
        hello
        {posts.length > 0
            ? posts.map(p => (
                <Post
                    title={p.fields.title}
                    content={p.fields.content}
                    date={p.fields.date}
                    key={p.fields.title}
                />
            ))
            : null}
      </>
  )
}

export default HomePage