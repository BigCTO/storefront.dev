import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { sanity } from '../clients/sanity'
import Script from 'next/script'

export default function Index({apps}) {
 

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Build better headless storefronts, faster." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script async defer src="https://buttons.github.io/buttons.js" />

      <div className="px-3 md:px-6 lg:px-8 mt-5 md:mt-10">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center mb-5">
          <h1 className="text-2xl font-bold text-center"><span className="underline">storefront.dev</span> is an Open-Source, Headless E-Commerce Website that You Can Deploy in 1 Click.</h1>
        </div>
        <div className="w-full max-w-5xl mx-auto my-5 flex justify-center items-center">
          <a className="flex items-center bg-black shadow-sm rounded-md px-4 py-3 text-white" href="https://github.com/storefrontdev" aria-label="Follow @storefrontdev on GitHub"><img src="/github.svg" className="w-6 h-6" />Follow @storefrontdev</a>
          
        </div>


        <div className="w-full max-w-5xl mx-auto mt-10 flex flex-col items-center justify-center">
          <h2 className="font-light mb-5 italic max-w-[250px]">storefont.dev deploys with these apps out of the box</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="flex flex-col justify-center items-center bg-gray-100 border border-gray-200 rounded-md p-2">
              <div className="relative w-20 h-20 flex flex-col justify-between">
                <Image src="/apps/swell.png" alt="swell" layout="fill" className='object-contain object-center w-full mx-2' />
              </div>
              <span className="text-center text-xs text-gray-700">Platform</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 border border-gray-200 rounded-md p-2">
              <div className="relative w-20 h-20 flex flex-col justify-between">
                <Image src="/apps/rally.svg" alt="swell" layout="fill" className='object-contain object-center w-full mx-2' />
              </div>
              <span className="text-center text-xs text-gray-700">Checkout</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 border border-gray-200 rounded-md p-2">
              <div className="relative w-20 h-20 flex flex-col justify-between">
                <Image src="/apps/jshot-stacked.svg" alt="swell" layout="fill" className='object-contain object-center w-full mx-2' />
              </div>
              <span className="text-center text-xs text-gray-700">Customer Portal</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-100 border border-gray-200 rounded-md p-2">
              <div className="relative w-20 h-20 flex flex-col justify-between">
                <Image src="/apps/sanity.png" alt="swell" layout="fill" className='object-contain object-center w-full mx-2' />
              </div>
              <span className="text-center text-xs text-gray-700">CMS</span>
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