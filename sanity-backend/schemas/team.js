export default {
  name: 'team',
  type: 'document',
  title: 'Equipo',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre',
      validation: (Rule) => Rule.required().max(30),
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Foto',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobFirstLine',
      type: 'string',
      title: 'Puesto/Cargo. Linea 1',
      validation: (Rule) => Rule.required().max(30),
    },
    {
      name: 'jobSecondLine',
      type: 'string',
      title: 'Puesto/Cargo. Linea 2',
      validation: (Rule) => Rule.max(30),
    },
  ],
}
