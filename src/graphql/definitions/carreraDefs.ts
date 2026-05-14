export const carreraDefs = () => {
    return `
    type Carrera {
        id: ID!
        nombre: String!
        duracion: Int!
        descripcion: String!
        tituloOtorgado: String!
        cargaHorariaTotal: Int!
    }
    type Query {
        carreras: [Carrera]
    }
` 
}