export default {
  name: 'tool',
  title: 'Tool',
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
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Analytics', value: 'analytics'},
          {title: 'Platform', value: 'platform'},
          {title: 'Checkout', value: 'checkout'},
          {title: 'CMS', value: 'cms'},
          {title: 'Customer Portal', value: 'portal'},
          {title: 'Framework', value: 'framework'},
          {title: 'Marketing', value: 'marketing'},
          {title: 'Payments', value: 'payments'},
          {title: 'Reviews', value: 'reviews'},
        ],
        layout: 'dropdown',
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
        {name: 'body', type: 'blockContent', title: 'Body'},
        {
          name: 'video',
          title: 'YouTube Video ID',
          type: 'string'
        }
      ],
    },
    {
      name: 'guides',
      title: 'Guides',
      type: 'array',
      of: [{type: 'reference', to: {type: 'guide'}}],
    },
    {
      name: 'integrations',
      title: 'Integrations',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tool'}}],
    },
    {
      name: 'experts',
      title: 'Experts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'expert'}}],
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}
