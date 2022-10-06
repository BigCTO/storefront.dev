export default {
  name: 'expert',
  title: 'Expert',
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
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'object',
      fields: [
        {name: 'url', type: 'string', title: 'Url'},
        {name: 'location', type: 'string', title: 'Location'},
        {name: 'body', type: 'blockContent', title: 'Body'},
        {
          name: 'video',
          title: 'YouTube Video ID',
          type: 'string'
        }
      ],
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