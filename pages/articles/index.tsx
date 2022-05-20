import Head from 'next/head'
import Link from 'next/link'

function Article() {
  return (
    <div>
      <Head>
        <title>ブログ</title>
      </Head>
      <Link href='articles/new'><h1>ブログ投稿はこちらから</h1></Link>
    </div>
  )
}

export default Article
