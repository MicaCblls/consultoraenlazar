export default {
  name: 'company',
  type: 'document',
  title: 'Empresas',
  fields: [
    {name: 'title', type: 'string', title: 'Título'},
    {
      name: 'mainImage',
      type: 'image',
      title: 'Imagen',
      options: {hotspot: true},
    },
  ],
}
