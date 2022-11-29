import { useState } from 'react'
import Head from 'next/head'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { BasicHero } from '../../../components/storefront'
import Toggle from '../../../components/toggle'
import { CodeBlock, tomorrowNightEighties} from "react-code-blocks";


const BasicHeroTemplate = `
  import { DefineType } from 'sanity'

  export const BasicHero = ({data}) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="col-span-1 md:col-span-2 w-full h-96 bg-gray-100">
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            Media
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>
            <p className="text-base md:text-xl">{data.subtitle}</p>
            <div className="flex items-center mt-5">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {data.primaryCTA}
              </button>
              <a href="#" className="ml-5 text-blue-500 hover:text-blue-700">{data.secondaryCTA}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Include this components Schema in your sanity.config.js file.
  // Ex. import BasicHero from './components/storefront/basicHero'
  // This will allow you to edit the data in the studio

  export default defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
      {
        name: 'componentName',
        title: 'Component Name',
        type: 'string',
        description: 'Give your component a name so you can easily find it in the studio',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'title',
        title: 'Title',
        description: 'The title of the hero section',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'subtitle',
        title: 'subtitle',
        type: 'text',          
      },
      {
        name: 'primaryCTA',
        title: 'Primary CTA',
        type: 'string',
      },
      {
        name: 'secondaryCTA',
        title: 'Secondary CTA',
        type: 'string',
      },
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: "sectionName",
        media: 'heroImage',
      },
    },
  })  
`


export default function Heroes() {
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
    copyTextToClipboard(BasicHeroTemplate)
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
                     <BasicHero />
                  </div>
                  : 
                  <CodeBlock text={BasicHeroTemplate} showLineNumbers={false} theme={tomorrowNightEighties} language="jsx" />}

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


