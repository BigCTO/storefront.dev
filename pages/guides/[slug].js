import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { sanity } from '../../clients/sanity'
import imageUrlBuilder from '@sanity/image-url'
// need an api or package to get hexcode from color name
import { PortableText } from '@portabletext/react'
import { Tab } from '@headlessui/react'

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

const pageType = 'guides'

const Guide = ({page}) => {
 
  return (
    <div>
      <Head>
        <title>{page?.seo?.title}</title>
        <meta name="description" content={page?.seo?.description} />

        <meta property="og:title" content={page?.seo?.title}/>
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://storefront.dev/${pageType}/${page?.slug?.current}`} />
        <meta property="og:description" content={page?.seo?.description} />
        <meta property="og:image" content={urlFor(page?.seo?.image).url()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <div className="relative w-full max-w-5xl mx-auto px-3 md:px-6 lg:px-8">
          <div className="w-full h-48 rounded-b-md shadow-md">
            {page?.coverImage && (
              <Image 
                src={urlFor(page?.coverImage).url()}
                alt={page?.name}
                layout="fill"
                objectFit='cover'
                objectPosition='center' 
                className='rounded-b-md shadow-sm'
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-10 w-full max-w-3xl mx-auto px-3 h-full mb-10">
        <div className="col-span-1 md:col-span-2 px-3 md:px-5 lg:px-8">
          <h1 className="text-3xl font-semibold mb-2">{page?.name}</h1>
          <h3 className="text-sm text-gray-600 font-regular">Chris Collinsworth</h3>
          <div className="w-full mt-10 prose text-justify">
          <PortableText
            // Pass in block content straight from Sanity.io
            value={page?.body || []}
            // Optionally override marks, decorators, blocks, etc. in a flat
            // structure without doing any gymnastics
            components={portableComponents}
           
          />
          </div>
        </div>
       
      </div>
    </div>
)}

export async function getStaticPaths() {
  const paths = await sanity.fetch(
    `*[_type == "guide" && defined(slug.current)][].slug.current`
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
    *[_type == "guide" && slug.current == $slug][0]
  `, { slug })
  return {
    props: {
      page
    }
  }
}

export default Guide
