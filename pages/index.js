import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { sanity } from '../clients/sanity'


export default function Index({apps}) {
 

  return (
    <div>
      <Head>
        <title>Apps</title>
        <meta name="description" content="Build better headless storefronts, faster." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-3 md:px-6 lg:px-8 mt-5 md:mt-10">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center mb-5">
          <h1 className="text-2xl font-bold">Deploy Your Headless E-Commerce Website in 1 Click.</h1>
          <p>Launch the fastest website, the fastest. Use your favorite apps and e-commerce software.</p>
        </div>
        <div className="w-full max-w-5xl mx-auto my-5 flex justify-center items-center">
          <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world" className="mr-5"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
          <Link href="/apps/swell" className="text-xs">Learn More</Link>
        </div>

        <div className="w-full max-w-6xl mx-auto bg-gray-100">
          <div className="flex flex-col justify-center items-center w-full h-full h-[450px] md:h-[660px]">
            <iframe src="https://amaryllisapparel.vercel.app" title="Storefront.Dev" width="100%" height="100%" className="shadow rounded-md border border-gray-200"></iframe>
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto mt-10 flex flex-col items-center justify-center">
          <h2 className="font-light mb-5 italic">Deploys with these apps out of the box</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="flex flex-col justify-center items-center bg-gray-100 border border-gray-200 rounded-sm p-2">
              <div className="relative w-24 h-24 flex flex-col justify-between">
                <Image src="/apps/swell.png" alt="swell" layout="fill" className='object-contain object-center w-full mx-2' />
                <span className="text-center text-xs text-gray-700">Backend</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 border border-gray-200 rounded-sm p-2">
              <div className="relative w-24 h-24 flex flex-col justify-between">
                <Image src="/apps/rally.svg" alt="swell" layout="fill" className='object-contain object-center w-full mx-2' />
                <span className="text-center text-xs text-gray-700">Checkout</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 border border-gray-200 rounded-sm p-2">
              <div className="relative w-24 h-24 flex flex-col justify-between">
                <Image src="/apps/jshot-stacked.svg" alt="swell" layout="fill" className='object-contain object-center w-full mx-2' />
                <span className="text-center text-xs text-gray-700">Customer Portal</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 border border-gray-200 rounded-sm p-2">
              <div className="relative w-24 h-24 flex flex-col justify-between">
                <Image src="/apps/sanity.png" alt="swell" layout="fill" className='object-contain object-center w-full mx-2' />
                <span className="text-center text-xs text-gray-700">CMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-10 px-3 md:px-6 lg:px-8 mb-10">

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