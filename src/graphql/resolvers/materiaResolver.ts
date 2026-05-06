import { Materia } from "../../database/models/Materia.js"

export const materiaResolver = () => {
  return {
    Query: {
      materias: async () => {
        const materias = await Materia.find()
        return materias
      }
    },
    Mutation: {
      createMateria: async (root, data) => {
        // TODO: VALIDACION DE DATOS
  
        // Creamos la materia
        const materia = new Materia(data)
        // La guardamos en la base de datos
        await materia.save()
        return materia
      },
      deleteMateria: async (root, data) => {
        const {id} = data
        const materia = await Materia.findByIdAndDelete(id)
        return materia
      }
    }
  }
}