export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Foto',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobTitle',
      type: 'string',
      title: 'Puesto/Cargo',
      validation: (Rule) => Rule.required(),
    },
  ],
}
