
// Replace this with data from Sanity by passing in the data as props
const data = {
  title: 'This is a title',
  subtitle: 'This is a subtitle',
  primaryCTA: 'Call to Action',
  secondaryCTA: 'Secondary CTA',
}


export const BasicHero = () => {
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

// Define this components Schema
export default {
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
}
