export const carreraDefs = () => {
    return `
    type Carrera {
        id: ID!
        nombre: String!
        duracion: Int!
        descripcion: String!
        tituloOtorgado: String!
        cargaHorariaTotal: Int!
        materias: [Materia]
    }
    type Query {
        carreras: [Carrera]
        carrera(id: ID!): Carrera
    }
` 
}