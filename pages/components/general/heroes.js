import { useState } from 'react'
import Head from 'next/head'
import Radio from '../../../components/form/radio'
import Select from '../../../components/form/select'
import Link from 'next/link'
import { BasicHero, Slider } from '../../../components/storefront'
// need an api or package to get hexcode from color name




export default function Heroes() {
  const [theme, setTheme] = useState('base')
  const [cms, setCMS] = useState('sanity')
  const [platform, setPlatform] = useState('swell')

  return (
    <>
  
        <Head>
          <title>Hero Sections</title>
          <meta name="description" content="Build better headless storefronts, faster." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full border-b border-gray-200 bg-gray-100">
          <div className="w-full max-w-7xl mx-auto py-10 px-3 md:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h1 className="text-4xl font-bold">Hero Sections</h1>
              <h2 className="font-light text-xl mt-3 text-center">Pre-coded sections of your storefront that can be dropped into your website for immediate use.</h2>
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto my-20 px-3 md:px-6 lg:px-8">
      
          <div>
            <div className="w-full mt-10">
              <div className="flex justify-between items-center">
                <h3>Basic Hero</h3>
                <div className="flex items-center space-x-2">
                  <div>
                    Preview
                  </div>
                  <select className="border border-gray-300 rounded-md px-3 py-2" onChange={(e) => setCMS(e.target.value)}>
                    <option value="sanity">Sanity</option>
                    <option value="builder" disabled>Builder</option>
                    <option value="plasmic" disabled>Plasmic</option>
                  </select>
                  <select className="border border-gray-300 rounded-md px-3 py-2" onChange={(e) => setPlatform(e.target.value)}>
                    <option value="swell">Swell</option>
                    <option value="bigcommerce" disabled>BigCommerce</option>
                  </select>
                </div>
              </div>
              <div className='border border-gray p-5 rounded-sm mt-5'>
                <BasicHero />
              </div>
            </div>

            <a href="" className="block w-full mt-5 text-xs">
              See it in action
            </a>
          
          </div>
        </div>
        
    </>
    
    )
}