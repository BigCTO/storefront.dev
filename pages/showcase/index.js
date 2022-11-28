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
        <title>Showcase</title>
        <meta name="description" content="Build better headless storefronts, faster." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full border-b border-gray-200 bg-gray-100">
        <div className="w-full max-w-7xl mx-auto py-10 px-3 md:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-4xl font-bold">Showcase</h1>
            <h2 className="font-light text-xl mt-3 text-center">Directory of the best headless storefronts on the internet.</h2>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-10 px-3 md:px-6 lg:px-8 mb-10">
        <div className="grid grid cols-1 md:grid-cols-4">
          <div className="col-span-2 md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-min">
            {guides.map((guide, i) => (
                <Link href={`/showcase/${guide?.slug.current}`} key={i} passHref>
                  <div className="flex flex-col w-full h-[300px] rounded-md rounded-md border hover:bg-gray-100 cursor-pointer">
                    <div className='relative w-full h-48 mb-2'>
                      <Image 
                        src={urlFor(guide?.coverImage).url()}
                        blurDataURL={guide?.coverImage}
                        placeholder="blur"
                        layout='fill'
                        alt={guide.name} 
                        objectFit='cover'
                        objectPosition='top'
                        className="rounded-t-md"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-xl font-bold mt-2">{guide?.name}</h3>
                      <div className="flex flex-wrap">
                        {guide?.apps?.map((tag, index) => (
                          <Link href={`/apps/${tag.slug.current}`} key={index} className="bg-gray-100 text-gray-500 text-xs font-medium rounded-md px-2 py-1 mt-2 mr-2 mb-2 hover:bg-gray-200">
                            {tag.name}
                          </Link>
                        ))}
                      </div>
                    </div>
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

  const guides = await sanity.fetch(`*[_type == "storefront"]{
    ...,
    apps[]->,
  }`)
  return {
    props: {
      guides
    }
  }
}