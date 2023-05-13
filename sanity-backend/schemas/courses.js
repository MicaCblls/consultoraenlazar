export default {
  name: 'course',
  type: 'document',
  title: 'Cursos',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
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
      name: 'mainImage',
      type: 'image',
      title: 'Imagen',
      options: {hotspot: true},
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
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Fecha de publicación',
    },
  ],
}
