import Head from 'next/head'
import Link from 'next/link'
// need an api or package to get hexcode from color name


const apps =[
  {
    name: 'Algolia',
    description: 'Search API.',
    image: '/apps/algolia.svg',
    href: '/apps/algolia',
    type: 'search'
  },
  {
    name: 'Snipcart',
    description: 'Snipcart is a headless commerce backend.',
    image: '/apps/snipcart.svg',
    href: '/apps/snipcart',
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
    href: '/apps/okendo',
    type: 'reviews'
  },
  {
    name: 'Sanity',
    description: 'Sanity is a headless CMS',
    image: '/apps/sanity.png',
    href: '/apps/shopify',
    type: 'CMS'
  },
  {
    name: 'Contenful',
    description: 'Contentful is a CMS',
    image: '/apps/contentful.png',
    href: '/apps/contetnful',
    type: 'CMS'
  },
  {
    name: 'DatoCMS',
    description: 'Datocms is a CMS',
    image: '/apps/datocms.svg',
    href: '/apps/datocms',
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
    href: '/apps/saleor',
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
    href: '/apps/omnisend',
    type: 'marketing'
  },
  {
    name: 'Magento',
    description: 'Snipcart is a headless commerce backend.',
    image: '/apps/magento.png',
    href: '/apps/magento',
    type: 'backend'
  },
  {
    name: 'Shopify',
    description: 'Shopify is a headless commerce backend.',
    image: '/apps/shopify.png',
    href: '/apps/shopify',
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

export default function Apps() {
 
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
            <h2 className="font-light text-xl mt-3">Find apps that will help you increase your AOV, ROAS, and bottom line.</h2>
            <input className="w-full max-w-md border border-gray-300 rounded-md p-2 mt-5" placeholder="Search for apps" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-10 px-3 md:px-6 lg:px-8 mb-10">
        <div className="grid grid cols-1 md:grid-cols-5">
          <div className="sticky top-[150px] col-span-1 h-screen border-dashed border border-gray-200 rounded-md mr-5">
            <span className="text-xs text-center block mt-10">Filter by</span>
          </div>
          <div className="col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
            {apps.map((app, i) => (
                <Link href={app.href} key={i} passHref>
                  <a className="flex flex-col justify-center items-center w-full h-32 rounded-md p-5 rounded-md border hover:bg-gray-100 cursor-pointer">
                  <img src={app.image} alt={app.name} className="h-10" />
                  <h3 className="text-xs mt-5">{app.type}</h3>
                  </a>
                </Link>
            ))}
          </div>   
        </div>
      </div>


    </div>
  )
}
