export default {
  name: 'benefit',
  type: 'document',
  title: 'Beneficios',
  fields: [
    {name: 'title', type: 'string', title: 'Título', validation: (Rule) => Rule.required()},
    {
      name: 'slug',
      title: 'Identificador',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Imagen',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'URL',
      name: 'link',
      type: 'object',
      fields: [{title: 'URL', name: 'href', type: 'url'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descripción',
      validation: (Rule) => Rule.required(),
    },
  ],
}
