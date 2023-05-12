export default {
  name: 'course',
  type: 'document',
  title: 'Cursos',
  fields: [
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
    },
    {
      name: 'price',
      type: 'number',
      title: 'Precio',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'order',
      type: 'number',
      title: 'Orden de importancia',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'inscriptionLink',
      type: 'string',
      title: 'Link Google Form',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Imagen',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'commissions',
      type: 'array',
      title: 'Comisiones',
      of: [{type: 'reference', to: {type: 'commission'}}],
    },
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
    {
      name: 'provider',
      type: 'reference',
      title: 'Proveedor',
      to: {type: 'provider'},
    },
  ],
}
