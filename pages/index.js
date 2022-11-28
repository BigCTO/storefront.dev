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
  
      <div className="px-3 md:px-6 lg:px-8 py-10 md:py-20 bg-gray-900">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="col-span-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-50">Storefront is an Open-Source, Headless E-Commerce Framework.</h1>
              <h2 className="font-base font-light mt-3 text-gray-50">Deploy a new website in one click or add our e-commerce specific components to your existing storefront.</h2>
              <div className="mt-5 space-x-5 flex items-center">
                <a className="bg-green-500 shadow-sm rounded-md text-xs md:text-base px-3 md:px-4 py-3 text-white inline-flex items-center" href="https://github.com/storefrontdev" aria-label="Follow @storefrontdev on GitHub"><img src="/github.svg" className="w-6 h-6 mr-2" />Follow @storefrontdev</a>
                <a className="border border-green-500 shadow-sm rounded-md text-xs md:text-base px-3 md:px-4 py-3 text-green-500 inline-flex items-center" href="https://github.com/storefrontdev" aria-label="Follow @storefrontdev on GitHub">&#9650; Deploy on Vercel</a>
              </div>

              <div className="w-full max-w-2xl mt-10 flex flex-col justify-center">
                <h2 className="font-light mb-2 italic text-gray-50">storefront.dev deploys with these apps out of the box</h2>
                <div className="flex items-center space-x-6">
   
                    <div className="relative w-14 h-10 flex flex-col justify-center">
                      <Image src="/apps/swell.png" alt="swell" fill className='object-contain object-center w-full text-white' />
                    </div>
               
            
                    <div className="relative w-14 h-10 flex flex-col justify-between">
                      <Image src="/apps/rally.svg" alt="swell" fill className='object-contain object-center w-full invert' />
                    </div>
             
                    <div className="relative w-14 h-10 flex flex-col justify-between">
                      <Image src="/apps/sanity.png" alt="swell" layout="fill" className='object-contain object-center w-full' />
                    </div>
                
                    <div className="relative w-14 h-10 flex flex-col justify-between">
                      <Image src="/apps/jshot-stacked.svg" alt="swell" layout="fill" className='object-contain object-center w-full invert' />
                    </div>
             
              
                
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1">

            </div>
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