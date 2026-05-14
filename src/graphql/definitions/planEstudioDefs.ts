export const planEstudioDefs = () => {
    return `
        type PlanEstudio {
            id: ID!
            carreraId: String!
            materiaId: String!
            year: Int!
            cuatrimestre: Int!
            correlativas: [String]!
        }
    `
}