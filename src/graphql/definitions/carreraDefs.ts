export const carreraDefs = () => {
    return `
    type Carrera {
        _id: String
        nombre: String!
        duracion: Int!
        descripcion: String!
        tituloOtorgado: String!
        cargaHorariaTotal: Int!
    }
    type Query {
        carreras: [Carrera]
    }
    type Mutation {

    }  
  ` 
  
}