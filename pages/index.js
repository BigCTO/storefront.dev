import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Storefront.dev</title>
        <meta name="description" content="Build better headless storefronts, faster." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center items-center w-full h-full min-h-screen'>
        <h1 className="text-6xl font-bold">storefront.dev</h1>
        <p className="text-2xl font-semibold">Build better headless storefronts, faster.</p>
      </main>

    </div>
  )
}
