import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Next Blog by Fausto Couto
        </h1>
      </main>
    </div>
  )
}
