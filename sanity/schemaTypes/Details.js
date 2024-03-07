
export default {
    name: 'details',
    type: 'document',
    title: 'Details',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of portfolio'
      },
      {
        name: 'author',
        type: 'string',
        title: 'Name of Author'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of title',
        options: {
          source: 'title',
        },
      },
      {
        name: 'authorImage',
        type: 'image',
        title: 'Author Image',
      }, 
      {
        name: 'cvDownloadLink',
        title: 'Download Link',
        type: 'url',
       // validation: (Rule) => Rule.required()
      }, 
      // {
      //   name: 'smallDescription',
      //   type: 'text',
      //   title: 'Small Description',
      // },
      {
        name: "content",
        type: "array",
        title: "Content",
        of: [
            {
            type: "block",
            },
        ],
      },
    ],
  }

  