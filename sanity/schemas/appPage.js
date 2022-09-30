export default {
  name: 'appPage',
  title: 'App Page',
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
      name: 'logo',
      title: 'logo',
      type: 'image',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'object',
      fields: [
        {name: 'url', type: 'string', title: 'Url'},
        {name: 'location', type: 'string', title: 'Location'},
        {name: 'body', type: 'blockContent', title: 'Body'}
      ],
    },
    {
      name: 'demo',
      title: 'Demo',
      type: 'array',
      of: [{type: 'reference', to: {type: 'videoBlock'}}],
    },
    {
      name: 'integrations',
      title: 'Integrations',
      type: 'array',
      of: [{type: 'reference', to: {type: 'appPage'}}],
    }
  ],

  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}
