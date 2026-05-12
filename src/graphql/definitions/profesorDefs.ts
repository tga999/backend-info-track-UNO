export const profesorDefs = () =>{
    return `
        type Profesor {
            _id: String!
            nombre: String!
            apellido: String!
            email: String!
            materia: [Materia]
        }
    `
}