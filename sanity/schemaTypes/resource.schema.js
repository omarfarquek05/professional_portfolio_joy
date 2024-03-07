
const schema = {
    name: 'resource',
    title: 'Resource',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
       // require,
        //validation: (Rule) => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' }
      },
      {
        name: 'downloadLink',
        title: 'Download Link',
        type: 'url',
       // validation: (Rule) => Rule.required()
      },
      {
        name: 'projecturl',
        title: 'view project',
        type: 'url',
        //validation: (Rule) => Rule.required()
      },
      {
        name: 'githuburl',
        title: 'view source code',
        type: 'url',
        //validation: (Rule) => Rule.required()
      },

      {
        name: 'views',
        title: 'Views',
        type: 'number',
        initialValue: 0,
      },
      {
        name: 'poster',
        title: 'Poster',
        type: 'image',
       // validation: (Rule) => Rule.required(),
        options: {
          hotspot: true,
        }
      },
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
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        //validation: (Rule) => Rule.required(),
        options: {
          list: ['All', 'NextJs', 'Frontend', 'Backend', 'Fullstack','Python','Django','MERN']
        }
      }
    ]
  }
  
  export default schema;