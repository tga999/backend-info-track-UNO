import { Materia } from "../../database/models/Materia.js"
import { PlanEstudio } from "../../database/models/PlanEstudio.js"
import type { IMateria, SearchMateriaInput } from "../../types/materia.js"

export const materiaResolver = () => {
  return {
    Query: {
      materias: async (_root: undefined, args: SearchMateriaInput) => {
        const {search = "", page = 1, limit = 10} = args

        // Filtramos con el search y hacemos paginación
        // TODO: Parmitir busquedas sin tildes
        const materias = await Materia.find(
          {nombre: {
            $regex: search,
            $options: 'i'
          }}
        ).collation({locale: 'es', strength: 1})
        .skip((page-1) * limit)
        .limit(limit)

        return materias
      },
      materia: async (_root: undefined, args: {id: string}) => {
        return await Materia.findById(args.id)
      }
    },
    Mutation: {
      createMateria: async (root: undefined, data: undefined) => {
        // TODO: VALIDACION DE DATOS
  
        // Creamos la materia
        const materia = new Materia(data)
        // La guardamos en la base de datos
        await materia.save()
        return materia
      },
      deleteMateria: async (root: undefined, data: {id: string}) => {
        const {id} = data
        const materia = await Materia.findByIdAndDelete(id)
        return materia
      }
    },
    Materia: {
      carreras: async (root: IMateria) => {
        const planEstudio = await PlanEstudio.find({materiaId: root.id}).populate("carreraId")
        const carreras = planEstudio.map(pe => pe.carreraId)
        return carreras
      }
    }
  }
}