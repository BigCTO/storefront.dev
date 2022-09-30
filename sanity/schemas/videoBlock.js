export default {
  name: 'videoBlock',
  title: 'Video Block',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      "title": "Video file",
      "name": "video",
      "type": "mux.video"
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}