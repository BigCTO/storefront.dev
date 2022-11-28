import { useState } from 'react'
import Head from 'next/head'
import Radio from '../../../components/form/radio'
import Select from '../../../components/form/select'
import { BasicHero, Slider } from '../../../components/storefront'
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




export default function ProductOptions() {
  const [theme, setTheme] = useState('base')
  const [cms, setCMS] = useState('sanity')
  const [platform, setPlatform] = useState('swell')

  return (
    <>
  
        <Head>
          <title>Option Sections</title>
          <meta name="description" content="Build better headless storefronts, faster." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="w-full border-b border-gray-200 bg-gray-100">
          <div className="w-full max-w-7xl mx-auto py-10 px-3 md:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h1 className="text-4xl font-bold">Options</h1>
              <h2 className="font-light text-xl mt-3 text-center">Pre-coded sections of your storefront that can be dropped into your website for immediate use.</h2>
            </div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto my-20 px-3 md:px-6 lg:px-8">
      
          <div>
            <div className="w-full mt-10">
              <div className="flex justify-between items-center">
                <h3>Basic Options</h3>
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
              <div className='border border-gray p-5 rounded-sm mt-5 flex justify-center'>
                <div className="w-[350px] border border-gray-100 shadow-md rounded-sm p-5">
                  
                  {product.options.map((option) => (
                    <div className="pb-4 w-full" key={option.name}>
                      {option.input_type === 'radio' ? (
                        // turn this into its own component
                        <Radio 
                          option={option} 
                          checkedClasses={'border-2 border-black'} 
                          uncheckedClasses={'border border-gray-300'}
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

            <a href="" className="block w-full mt-5 text-xs">
              See it in action
            </a>
          
          </div>
        </div>
        
    </>
    
    )
}