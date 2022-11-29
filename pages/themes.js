import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Radio from '../components/form/radio'
import Select from '../components/form/select'

// swell product
const product = {
  name: 'Couch',
  price: '$499.99',
  description: 'The best couch money can buy.',
  options: [
    {
      id: "6283894949",
      name: "Color",
      active: true,
      input_type: "radio",
      variant: true,
      required: true,
      attribute_id: "color",
      values: [
        {
          id: '6283894957',
          name: 'Red Plaid',
          image: '/plaid.png'
        },
        {
          id: '6283894965',
          name: 'Blue',
        },
        {
          id: '6283894973',
          name: 'Green',
        },
        {
          id: '6283894973',
          name: 'Purple',
        },
        {
          id: '6283894973',
          name: 'Yellow',
        },
      ]
    },
    {
      id: "6283894950",
      name: "Size",
      input_type: "select",
      variant: true,
      required: true,
      attribute_id: "size",
      values: [
        {
          id: '6283894951',
          name: 'Small',
        },
        {
          id: '6283894952',
          name: 'Medium',
        },
        {
          id: '6283894953',
          name: 'Large',
        },
        {
          id: '6283894953',
          name: 'X-Large',
        }
      ]
    },
    {
      id: "6283894949",
      name: "Inseam",
      active: true,
      input_type: "radio",
      variant: true,
      required: true,
      attribute_id: "inseam",
      values: [
        {
          id: '6283894957',
          name: '5"',
        },
        {
          id: '6283894965',
          name: '7"',
        },
        {
          id: '6283894973',
          name: '9"',
        },
      ]
    },
    {
      id: "6283894949",
      name: "Liner",
      active: true,
      input_type: "radio",
      variant: true,
      required: true,
      attribute_id: "liner",
      values: [
        {
          id: '6283894957',
          name: 'Liner',
        },
        {
          id: '6283894965',
          name: 'Linerless',
        },
      ]
    },
  ]
}


export default function Themes() {
  const [theme, setTheme] = useState('base')
  const [cms, setCMS] = useState('sanity')
  const [platform, setPlatform] = useState('swell')

  return (
    <div className="mx-auto py-10 md:py-20 px-3 md:px-6 lg:px-8 bg-gray-900">
  
        <Head>
          <title>Themes</title>
          <meta name="description" content="Build better headless storefronts, faster." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-gray-50 text-4xl">Themes</h1>
          <p className="text-gray-50 max-w-2xl w-full">Storefront Themes are the combination of a Tailwind Theme or Preset with select components. Every component on storefront.dev is compatible with any theme.</p>
        
          <h2 className="text-2xl text-gray-50 mt-10">What is a Tailwind Theme</h2>
          <p className="text-gray-50">A Tailwind Theme is base set of configuration for Tailwind CSS that allows you to control the values of Tailwind&apos;s utility classes.</p>
        </div>


        <div className="w-full max-w-7xl mx-auto border border-gray-300 rounded-md my-20">
          <div className='flex w-full items-center h-16 border-b border-gray-200'>
            <div className='max-w-7xl mx-auto w-full flex items-center justify-between px-3 md:px-5 lg:px-8'>
              <div className='flex justify-start w-full'>
                <Link href='/' className='text-2xl font-bold text-gray-50'>
                  Dennis
                </Link>
              </div>
              <div className='flex justify-end w-full'>
                <select onChange={(e) => setTheme(e.target.value)} className="mt-1 w-32 block rounded-md border border-gray-300 py-2 pl-3 pr-8 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option value='base'>Base</option>
                  <option value='brutal'>Brutal</option>
                  <option value='neon'>Neon</option>
                </select>
                </div>
            </div>
          </div>

          <main className={`theme-${theme}`}>
            <div className="flex flex-col justify-center items-center w-full py-5 md:py-10 bg-theme-muted">
              <div className="max-w-7xl mx-auto h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-3 md:px-5 lg:px-8">
                <div className="col-span-1 md:col-span-2 w-full h-56 md:h-full flex flex-col justify-center items-center border border-gray-200 bg-theme-inverted border border-theme-accent rounded-theme-base">
                  <h6 className="text-xs text-gray-400 mb-1">Image Slider</h6>
                </div>
                <div className='col-span-1 w-full mx-auto'>
                  <div className="w-full">
                    <h1 className="text-3xl font-bold mb-2 theme-text-light">{product.name}</h1>
                  </div>
                  <h6 className="text-xs text-gray-400 mb-1">Product Options</h6>
                  <div className="w-full bg-theme-inverted border border-theme-accent rounded-theme-base p-5">
                    {product.options.map((option) => (
                      <div className="pb-4 w-full" key={option.name}>
                        {option.input_type === 'radio' ? (
                          // turn this into its own component
                          <Radio 
                            option={option} 
                            checkedClasses={'border-2 border-theme-base'} 
                            uncheckedClasses={'border border-theme-accent'}
                          />

                        ) : option.input_type === 'select' ? (
                          // turn this into its own component
                          <Select option={option} />
                        ) : null}
                        
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
       
      </div>
    </div>
    
    )
}