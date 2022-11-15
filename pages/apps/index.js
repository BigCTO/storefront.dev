import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { sanity } from '../../clients/sanity'
import imageUrlBuilder from '@sanity/image-url'
// need an api or package to get hexcode from color name

function urlFor (source) {
  return imageUrlBuilder(sanity).image(source)
}


const appz =[
  {
    name: 'Algolia',
    description: 'Search API.',
    image: '/apps/algolia.svg',
    href: '/apps/swell',
    type: 'search'
  },
  {
    name: 'Snipcart',
    description: 'Snipcart is a headless commerce backend.',
    image: '/apps/snipcart.svg',
    href: '/apps/swell',
    type: 'backend'
  },
  {
    name: 'Rally',
    description: 'Rally',
    image: '/apps/rally.svg',
    href: '/apps/rally',
    type: 'checkout'
  },
  {
    name: 'BigCommerce',
    description: 'BigCommerce is a headless commerce backend.',
    image: '/apps/bigcommerce.png',
    href: '/apps/bigcommerce',
    type: 'backend'
  },
  {
    name: 'Yotpo',
    description: 'Yotpo does reviews',
    image: '/apps/yotpo.png',
    href: '/apps/swell',
    type: 'reviews'
  },
  {
    name: 'Okendo',
    description: 'Okendo does reviews',
    image: '/apps/okendo.png',
    href: '/apps/swell',
    type: 'reviews'
  },
  {
    name: 'Sanity',
    description: 'Sanity is a headless CMS',
    image: '/apps/sanity.png',
    href: '/apps/swell',
    type: 'CMS'
  },
  {
    name: 'Contenful',
    description: 'Contentful is a CMS',
    image: '/apps/contentful.png',
    href: '/apps/swell',
    type: 'CMS'
  },
  {
    name: 'DatoCMS',
    description: 'Datocms is a CMS',
    image: '/apps/datocms.svg',
    href: '/apps/swell',
    type: 'CMS'
  },
  {
    name: 'Swell',
    description: 'Swell is a headless commerce backend that makes it easy to build and scale your own commerce experiences.',
    image: '/apps/swell.png',
    href: '/apps/swell',
    type: 'backend'
  },
  {
    name: 'Saleor',
    description: 'Saleor is a headless commerce backend.',
    image: '/apps/saleor.png',
    href: '/apps/swell',
    type: 'backend'
  },
  {
    name: 'Klaviyo',
    description: 'Shopify is a headless commerce backend.',
    image: '/apps/klaviyo.svg',
    href: '/apps/klaviyo',
    type: 'marketing'
  },
  {
    name: 'Omnisend',
    description: 'Omnisend is marketing automation.',
    image: '/apps/omnisend.svg',
    href: '/apps/swell',
    type: 'marketing'
  },
  {
    name: 'Magento',
    description: 'Snipcart is a headless commerce backend.',
    image: '/apps/magento.png',
    href: '/apps/swell',
    type: 'backend'
  },
  {
    name: 'Shopify',
    description: 'Shopify is a headless commerce backend.',
    image: '/apps/shopify.png',
    href: '/apps/swell',
    type: 'backend'
  },
  {
    name: 'Stripe',
    description: 'Stripe is a headless commerce backend.',
    image: '/apps/stripe.png',
    href: '/apps/stripe',
    type: 'payments'
  },

]

export default function Index({apps}) {
 
  useEffect(() => {
    console.log(apps)
  }, [apps])


  return (
    <div>
      <Head>
        <title>Apps</title>
        <meta name="description" content="Build better headless storefronts, faster." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full border-b border-gray-200 bg-gray-100">
        <div className="w-full max-w-7xl mx-auto py-10 px-3 md:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-4xl font-bold">Apps</h1>
            <h2 className="font-light text-xl mt-3">Find apps that are compatible with your #headless commerce website.</h2>
            <input className="w-full max-w-md border border-gray-300 rounded-md p-2 mt-5" placeholder="Search for apps" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-10 px-3 md:px-6 lg:px-8 mb-10">
        <div className="grid grid cols-1 md:grid-cols-4">
          {/* <div className="hidden md:block sticky top-[150px] col-span-1 h-screen border-dashed border border-gray-200 rounded-md mr-5">
            <span className="text-xs text-center block mt-10">Filter by</span>
          </div> */}
          <div className="col-span-2 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
            {apps.map((app, i) => (
                <Link href={`/apps/${app?.slug.current}`} key={i} passHref>
                  <a className="flex flex-col justify-center items-center w-full h-32 rounded-md p-5 rounded-md border hover:bg-gray-100 cursor-pointer">
                  <div className='relative w-full h-10 mb-2'>
                  <Image 
                    src={urlFor(app?.logo).url()}
                    blurDataURL={app?.logo}
                    placeholder="blur"
                    layout='fill'
                    alt={app.name} 
                    objectFit='contain'
                    objectPosition='center'
                  />
                  </div>
                  <span className="mt-5 inline-flex items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-800">
                    <span>{app.type}</span>
                  </span>
                  </a>
                </Link>
            ))}
          </div>   
        </div>
      </div>


    </div>
  )
}


export async function getStaticProps(context) {

  const apps = await sanity.fetch(`*[_type == "appPage"]`)
  return {
    props: {
      apps
    }
  }
}