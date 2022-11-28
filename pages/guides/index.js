import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { sanity } from '../../clients/sanity'
import imageUrlBuilder from '@sanity/image-url'
import guide from '../../sanity/schemas/guide'
// need an api or package to get hexcode from color name

function urlFor (source) {
  return imageUrlBuilder(sanity).image(source)
}

export default function Guides({guides}) {
 
  useEffect(() => {
    console.log(guides)
  }, [guides])


  return (
    <div>
      <Head>
        <title>Guidess</title>
        <meta name="description" content="Build better headless storefronts, faster." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full border-b border-gray-200 bg-gray-100">
        <div className="w-full max-w-7xl mx-auto py-10 px-3 md:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-4xl font-bold">Guides</h1>
            <h2 className="font-light text-xl mt-3">The best resource to find out how to work with the best headless apps.</h2>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-10 px-3 md:px-6 lg:px-8 mb-10">
        <div className="grid grid cols-1 md:grid-cols-4">
          {/* <div className="hidden md:block sticky top-[150px] col-span-1 h-screen border-dashed border border-gray-200 rounded-md mr-5">
            <span className="text-xs text-center block mt-10">Filter by</span>
          </div> */}
          <div className="col-span-2 md:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-min">
            {guides.map((guide, i) => (
                <Link href={`/guides/${guide?.slug.current}`} key={i}>
                  <div className="flex flex-col items-center w-full h-48 rounded-md rounded-md border hover:bg-gray-100 cursor-pointer">
                    <div className='relative w-full h-28 mb-2'>
                      <Image 
                        src={urlFor(guide?.coverImage).url()}
                        blurDataURL={guide?.coverImage}
                        placeholder="blur"
                        layout='fill'
                        alt={guide.name} 
                        objectFit='cover'
                        objectPosition='center'
                        className="rounded-t-md"
                      />
                    </div>
                    <h3 className="text-xs mt-5">{guide.name}</h3>
                  </div>
                </Link>
            ))}
          </div>   
        </div>
      </div>


    </div>
  )
}


export async function getStaticProps(context) {

  const guides = await sanity.fetch(`*[_type == "guide"]`)
  return {
    props: {
      guides
    }
  }
}