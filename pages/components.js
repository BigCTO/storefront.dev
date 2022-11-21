import { useState } from 'react'
import Head from 'next/head'
import Radio from '../components/form/radio'
import Select from '../components/form/select'
import Link from 'next/link'
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
          image: '/apps/swell.png'
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
      id: "6283894950",
      name: "Material",
      input_type: "select",
      variant: true,
      required: true,
      attribute_id: "meterial",
      values: [
        {
          id: '6283894951',
          name: 'Silk',
        },
        {
          id: '6283894952',
          name: 'Cotton',
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




export default function Storefronts() {
  const [theme, setTheme] = useState('base')

  return (
 
    <div className="w-full max-w-6xl mx-auto border border-gray-300 rounded-md my-20">
      <div className='flex w-full items-center h-16 border-b border-gray-200'>
        <div className='max-w-7xl mx-auto w-full flex items-center justify-between px-3 md:px-5 lg:px-8'>
          <div className='flex justify-start w-full'>
            <Link href='/' passHref>
              <a className='text-2xl font-bold'>Dennis</a>
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
        <div className="flex flex-col justify-center items-center w-full py-5 md:py-20 bg-theme-muted">
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
          </div>
        </div>
      </main>
        </div>
    )
}