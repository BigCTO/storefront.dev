import { useState } from 'react'
import Head from 'next/head'
import Radio from '../../components/form/radio'
import Select from '../../components/form/select'
import Link from 'next/link'
import { BasicHero, Slider } from '../../components/storefront'
// need an api or package to get hexcode from color name



export default function Storefronts() {

  return (
    <div className="mx-auto py-10 md:py-20 px-3 md:px-6 lg:px-8 bg-gray-900">
  
        <Head>
          <title>Components</title>
          <meta name="description" content="Build better headless storefronts, faster." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-4 border-b border-gray-200 pb-10">
            <div className="col-span-1">
              <h2 className="font-semibold text-sm text-gray-50">Page Sections</h2>
            </div>
            <div className="col-span-3 grid grid-cols-6 gap-4">
              <Link href="/components/general/heroes" passHref className="text-gray-50 col-span-2 w-full h-48 border border-gray-200 rounded-sm p-5 hover:cursor-pointer">
                <div className="w-full h-full flex flex-col justify-end">
                  <h3 className="text-base font-semibold text-gray-50">Hero</h3>
                  <p className="text-xs font-light text-gray-50">3 Components</p>
                </div>
              </Link>
              <div className="col-span-2 w-full h-48 border border-gray-200 rounded-sm p-5 hover:cursor-pointer">
                <div className="w-full h-full flex flex-col justify-end">
                  <h3 className="text-base font-semibold text-gray-50">FAQ</h3>
                  <p className="text-xs font-light text-gray-50">3 Components</p>
                </div>
              </div>
              <div className="col-span-2 w-full h-48 border border-gray-200 rounded-sm p-5 hover:cursor-pointer">
                <div className="w-full h-full flex flex-col justify-end">
                  <h3 className="text-base font-semibold text-gray-50">Us vs Them</h3>
                  <p className="text-xs font-light text-gray-50">2 Components</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 border-b border-gray-200 py-10">
            <div className="col-span-1">
              <h2 className="font-semibold text-sm text-gray-50">Product Sections</h2>
            </div>
            <div className="col-span-3 grid grid-cols-6 gap-4">
              <div className="col-span-2 w-full h-48 border border-gray-200 rounded-sm p-5 hover:cursor-pointer">
                <div className="w-full h-full flex flex-col justify-end">
                  <h3 className="text-base font-semibold text-gray-50">Media Carousel</h3>
                  <p className="text-xs font-light text-gray-50">3 Components</p>
                </div>
              </div>
              <Link href="/components/products/options" passHref className="col-span-2 w-full h-48 border border-gray-200 rounded-sm p-5 hover:cursor-pointer">
                <div className="w-full h-full flex flex-col justify-end">
                  <h3 className="text-base font-semibold text-gray-50">Media Grid</h3>
                  <p className="text-xs font-light text-gray-50">1 Component</p>
                </div>
              </Link>
              <Link href="/components/products/options" passHref className="col-span-2 w-full h-48 border border-gray-200 rounded-sm p-5 hover:cursor-pointer">
                <div className="w-full h-full flex flex-col justify-end">
                  <h3 className="text-base font-semibold text-gray-50">Product Options</h3>
                  <p className="text-xs font-light text-gray-50">3 Components</p>
                </div>
              </Link>
              <div className="col-span-2 w-full h-48 border border-gray-200 rounded-sm p-5 hover:cursor-pointer">
                <div className="w-full h-full flex flex-col justify-end">
                  <h3 className="text-base font-semibold text-gray-50">Reviews</h3>
                  <p className="text-xs font-light text-gray-50">2 Components</p>
                </div>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-4 gap-4 border-b border-gray-200 py-10">
            <div className="col-span-1">
              <h2 className="font-semibold text-sm text-gray-50">Collection Sections</h2>
            </div>
            <div className="col-span-3 grid grid-cols-6 gap-4">
              <div className="col-span-2 w-full h-48 border border-gray-200 rounded-sm p-5 hover:cursor-pointer">
                <div className="w-full h-full flex flex-col justify-end">
                  <h3 className="text-base font-semibold text-gray-50">Collection Carousel</h3>
                  <p className="text-xs font-light text-gray-50">3 Components</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 border-b border-gray-200 py-10">
            <div className="col-span-1">
              <h2 className="font-semibold text-sm text-gray-50">Checkout Sections</h2>
            </div>
            <div className="col-span-3 grid grid-cols-6 gap-4">
              <Link href="/apps/rally" className="col-span-2 w-full h-48 border border-gray-200 rounded-sm p-5 hover:cursor-pointer">
                <div className="w-full h-full flex flex-col justify-end">
                  <img src="/apps/rally.svg" className="w-16 h-16 invert" />
                  <p className="text-xs font-light text-gray-50">
                    View the Rally App
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

  
        
    </div>
    
    )
}