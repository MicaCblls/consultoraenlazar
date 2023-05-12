export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'titleSEO',
      type: 'string',
      title: 'Título SEO ',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'SEOdescription',
      type: 'string',
      title: 'Descripción SEO',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Identificador',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      type: 'number',
      title: 'Orden de importancia',
      validation: (Rule) => Rule.required().positive(),
    },

    /* {
        name: 'mainImage',
        type: 'image',
        title: 'Imagen',
        options: {hotspot: true},
        validation: (Rule) => Rule.required(),
      }, */

    {
      name: 'description',
      type: 'text',
      title: 'Sinopsis',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Detalle',
    },
  ],
}
