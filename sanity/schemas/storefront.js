export default {
  name: 'storefront',
  title: 'Storefront',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    },
    {
      name: 'body', 
      type: 'blockContent', 
      title: 'Body'
    },
    {
      name: 'apps',
      title: 'Apps',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tool'}}],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title', 
          type: 'string', 
          title: 'Title',
        },
        {
          name: 'description', 
          type: 'string', 
          title: 'Description'
        },
        {
          name: 'image', 
          type: 'image', 
          title: 'Image',
      }
      ],
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'coverImage',
    },
  },
}