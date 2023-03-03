export default {
    name: 'team',
    type: 'document',
    title: 'Team',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Nombre'
        },
        {
            name: 'photo',
            type: 'image',
            title: 'Foto',
        },
        {
            name: 'jobTitle',
            type: 'string',
            title: 'Puesto/Cargo'
        }
    ]
}
