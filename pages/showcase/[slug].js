import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { sanity } from '../../clients/sanity'
import imageUrlBuilder from '@sanity/image-url'
// need an api or package to get hexcode from color name
import { PortableText } from '@portabletext/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function urlFor (source) {
  return imageUrlBuilder(sanity).image(source)
}

const portableComponents = {
  types: {
    code: ({value}) => {
      return (
        <pre data-language="javascript">
          <code>{value.code}</code>
        </pre>
      )
    }
  },
}

const pageType = 'storefront'

const Showcase = ({page}) => {
  useEffect(() => {
    console.log(page)
  },[page])
 
  return (
    <div>
      <Head>
        <title>{page?.seo?.title}</title>
        <meta name="description" content={page?.seo?.description} />

        <meta property="og:title" content={page?.seo?.title}/>
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://storefront.dev/${pageType}/${page?.slug?.current}`} />
        <meta property="og:description" content={page?.seo?.description} />
        {page?.seo?.image && <meta property="og:image" content={urlFor(page?.seo?.image).url()} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <div className="w-full max-w-7xl mx-auto px-3 md:px-6 lg:px-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
            <div className="relative col-span-2 w-full h-96 rounded-b-md shadow-md">
              {page?.coverImage && (
                <Image 
                  src={urlFor(page?.coverImage).url()}
                  alt={page?.name}
                  layout="fill"
                  objectFit='cover'
                  objectPosition='top' 
                  className='rounded-md shadow-sm'
                />
              )}
            </div>
            <div className="col-span-1">
              <h1 className="text-3xl font-bold">{page?.name}</h1>
              <a href={page?.url} className="text-blue-500 text-xs hover:text-blue-600" target="_blank" rel="noopener noreferrer">{page?.url}</a>
              <div className="mt-3 prose">
                <PortableText value={page?.body || []} serializers={portableComponents} />
              </div>
              <div className="mt-3">
                <h2 className="text-base font-bold">Apps</h2>
                <div className="flex flex-wrap">
                  {page?.apps?.map((tag, index) => (
                    <Link href={`/apps/${tag.slug.current}`} key={index} className="bg-gray-100 text-gray-500 text-xs font-medium rounded-md px-2 py-1 mt-2 mr-2 mb-2 hover:bg-gray-200">
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)}

export async function getStaticPaths() {
  const paths = await sanity.fetch(
    `*[_type == "storefront" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const page = await sanity.fetch(`
    *[_type == "storefront" && slug.current == $slug][0]{
      ...,
      apps[]->,
    }
  `, { slug })
  return {
    props: {
      page
    }
  }
}

export default Showcase
