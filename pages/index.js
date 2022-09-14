import { useState } from 'react'
import Head from 'next/head'
import Radio from '../components/form/radio'
import Select from '../components/form/select'

// need an api or package to get hexcode from color name

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
          name: 'Red',
        },
        {
          id: '6283894965',
          name: 'Blue',
        },
        {
          id: '6283894973',
          name: 'Green',
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


export default function Home() {
  const [theme, setTheme] = useState('base')
 

  return (
    <div>
      <Head>
        <title>Storefront.dev</title>
        <meta name="description" content="Build better headless storefronts, faster." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col justify-center items-center w-full h-full min-h-screen'>
        <div className="w-full max-w-md mx-auto">
          <div className="flex justify-end items-center inline-block">
            <select onChange={(e) => setTheme(e.target.value)} className="mt-1 w-32 block rounded-md border border-gray-300 py-2 pl-3 pr-8 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
              <option value='base'>Base</option>
              <option value='brutal'>Brutal</option>
              <option value='neon'>Neon</option>
            </select>
          </div>
        </div>

        <div className={`theme-${theme} w-full max-w-md mx-auto`}>
          <div className="bg-theme-inverted mt-10 border border-theme-accent rounded-theme-base p-5">
            {product.options.map((option) => (
              <div className="pb-4 w-full" key={option.name}>
                <h2 className="text-theme-base uppercase font-medium text-sm tracking-wide mb-5">
                  {option.name}
                </h2>
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
      </main>

    </div>
  )
}
