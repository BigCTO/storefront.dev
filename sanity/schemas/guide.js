export default {
  name: 'guide',
  title: 'Guide',
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