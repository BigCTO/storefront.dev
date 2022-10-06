import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { sanity } from '../../clients/sanity'
import imageUrlBuilder from '@sanity/image-url'
// need an api or package to get hexcode from color name
import PortableText from "react-portable-text"
import { Tab } from '@headlessui/react'
import { YouTube } from '../../components/video'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function urlFor (source) {
  return imageUrlBuilder(sanity).image(source)
}


const AppPage = ({page}) => {


let [categories] = useState({
  Demo: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Guides: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Pricing: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
})

 
  return (
    <div>
      <Head>
        <title>{page?.name}</title>
        <meta name="description" content="Build better headless storefronts, faster." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <div className="relative w-full max-w-5xl mx-auto px-3 md:px-6 lg:px-8">
          <div className="w-full h-48 rounded-md">
            {page?.coverImage && (
              <Image 
                src={urlFor(page?.coverImage).url()}
                alt={page?.name}
                layout="fill"
                objectFit='cover'
                objectPosition='center' 
                className='rounded-b-md'
              />
            )}
          </div>
          <div className="block md:hidden absolute right-5 md:-left-8 -bottom-14 md:-bottom-20 h-28 md:h-14 w-28 md:w-14 rounded-full bg-white flex items-center justify-center shadow border border-gray-200 z-10">
            <div className="relative h-8 w-[90%]">
              {page?.logo && (
                <Image 
                  src={urlFor(page?.logo).url()}
                  alt={page?.name}
                  layout="fill"
                  objectFit='contain'
                  objectPosition='center' 
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full max-w-5xl mx-auto px-3 md:px-5 lg:px-8 h-full my-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="col-span-1">
            <h1 className="text-3xl font-semibold mb-2">{page?.name}</h1>
            <div className="w-full max-w-md">
            <PortableText
              // Pass in block content straight from Sanity.io
              content={page?.introduction?.body || []}
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                normal: props => <p className="text-gray-600 text-sm mt-1" {...props} />,
              }}
            />
            <a href={`https://${page?.introduction.url}?ref=storefront.dev`} target="_blank" rel="noreferrer" className="text-blue-500 text-sm mt-1">{page?.introduction.url}</a>
            </div>
          </div>
          <div className="col-span-1 w-full">
            <YouTube videoId={page?.introduction?.video} />
          </div>
        </div>
       
        {/* <div className="mt-10 w-full">
          <div className="w-full">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-sm bg-gray-100 p-1">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-sm py-2.5 text-sm font-medium leading-5 text-black',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-white shadow'
                          : 'text-gray-800 hover:text-gray-900'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames(
                      'rounded-sm bg-white p-3',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                    )}
                  >
                    this is a panel
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div> */}

        <div className="mt-10 border-t border-gray-200 ">
          <h2 className="text-sm mt-5 font-semibold">Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {page?.guides?.map((guide) => (
              <Link href={`/guides/${guide.slug.current}`} key={guide._id}>
                <a className="grid col-span-1 grid-cols-1 md:grid-cols-3 border border-gray-200 shadow-sm rounded-md  hover:bg-gray-100">
                  <div className="col-span-1 relative h-32 md:h-full w-full">
                    {guide?.coverImage && (
                      <Image
                        src={urlFor(guide?.coverImage).url()}
                        alt={guide.name}
                        layout="fill"
                        objectFit='cover'
                        objectPosition='center' 
                      />
                    )}
                  </div>
                  <div className="col-span-1 md:col-span-2 p-3">
                    <div className="mt-2 text-base md:text-xs text-gray-700 font-medium">{guide?.name}</div>
                    <div className="mt-2 text-xs text-gray-500 font-light">{guide?.seo?.description}</div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      
        <div className="mt-10 border-t border-gray-200 ">
          <h2 className="text-sm mt-5 font-semibold">Integrates With</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-5 mt-5">
            {page?.integrations?.map((integration) => (
              <Link href={`/apps/${integration.slug.current}`} key={integration._id}>
                <a className="flex flex-col justify-center items-center border border-gray-200 shadow-sm rounded-md p-5 hover:bg-gray-100">
                  <div className="relative h-6 w-full">
                    {integration?.logo && (
                      <Image
                        src={urlFor(integration?.logo).url()}
                        alt={integration.name}
                        layout="fill"
                        objectFit='contain'
                        objectPosition='center' 
                      />
                    )}
                  </div>
                  <div className="mt-2 text-xs text-gray-500 font-medium">{integration.name}</div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      
  
        <div className="mt-10 border-t border-gray-200">
          <h2 className="text-sm mt-5 font-semibold">Experts</h2>
        </div>
        <div className="mt-10 border-t border-gray-200">
          <h2 className="text-sm mt-5 font-semibold">Jobs</h2>
        </div>
      </div>
    </div>
)}

export async function getStaticPaths() {
  const paths = await sanity.fetch(
    `*[_type == "appPage" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const page = await sanity.fetch(`
    *[_type == "appPage" && slug.current == $slug][0]{
      ...,
      demo[]-> {
        ...,
        video{
          ...,
          asset->
        },
      },
      guides[]->,
      integrations[]->,
    }
  `, { slug })
  return {
    props: {
      page
    }
  }
}

export default AppPage

// demo {
//   ...,
//   videos[] {
//     ...,
//     video {
//       ...,
//       asset->
//     }
//   }
// },