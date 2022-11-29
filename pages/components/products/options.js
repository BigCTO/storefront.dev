import { useState } from 'react'
import Head from 'next/head'
import { ProductOptions } from '../../../components/storefront'
import Toggle from '../../../components/toggle'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { CodeBlock, tomorrowNightEighties} from "react-code-blocks";


const OptionTemplate = `
import { useProduct, useOptions } from 'swellui/react'

// Pass in the product Slug from Swell
export default ProductOptions = ({slug}) => {

  const { product, options } = useProduct(slug);
  const { activeVariant, activeOptions, setActiveOptions } = useOptions(product);

  return(
    <div>
      <div className='border border-gray p-5 rounded-sm mt-5 flex justify-center'>
        <div className="w-[350px] border border-gray-100 shadow-md rounded-sm p-5">
          
          {options.map((option) => (
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
    

    <a href="" className="block w-full mt-5 text-xs">
      See it in action
    </a>
  </div>
  )
}
`



export default function Options() {
  const [theme, setTheme] = useState('base')
  const [cms, setCMS] = useState('sanity')
  const [platform, setPlatform] = useState('swell')

  const [enabled, setEnabled] = useState(true)
  const [isCopied, setIsCopied] = useState(false);



  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(OptionTemplate)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          <div className="flex justify-between items-center">
            <h3>Product Options</h3>
            <div className="flex items-center space-x-2 divide-x">
              <div className="flex items-center">
                <Toggle enabled={enabled} setEnabled={setEnabled}/>
              </div>
              <select className="px-3 py-2" onChange={(e) => setCMS(e.target.value)}>
                <option value="sanity">Sanity</option>
                <option value="builder" disabled>Builder</option>
                <option value="plasmic" disabled>Plasmic</option>
              </select>
              <select className="px-3 py-2" onChange={(e) => setPlatform(e.target.value)}>
                <option value="swell">Swell</option>
              </select>
              <div>
                {/* Bind our handler function to the onClick button property */}
                <button onClick={handleCopyClick} className="flex items-center space-x-2 ml-2">
                  <DocumentDuplicateIcon className={`h-5 w-5 hover:cursor-pointer transition-all ease-in-out ${isCopied ? 'text-green-500 scale-125' : 'text-gray-600'}`} />
                </button>
              </div>
            </div>
          </div>
          <div className='border border-gray rounded-sm mt-5 w-full'>
            {enabled ? 
              <div className="p-5">
                   <ProductOptions />
              </div>
              : 
              <CodeBlock text={OptionTemplate} showLineNumbers={false} theme={tomorrowNightEighties} language="jsx" />}

          </div>
         
        </div>
        
    </>
    
    )
}