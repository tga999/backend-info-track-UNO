import { Carrera }  from "../../database/models/Carrera.js"
import { PlanEstudio } from "../../database/models/PlanEstudio.js"
import type { ICarrera } from "../../types/carrera.js"

export const carreraResolver = () => {
    return {
        Query: {
            carreras: async () => { 
                const carreras = await Carrera.find()
                return carreras
            },
            carrera: async (_root: undefined, args: {id: string}) => {
                return await Carrera.findById(args.id)
            }
        },
        Carrera: {
            materias: async (root: ICarrera) => {
                const planEstudio = await PlanEstudio.find({carreraId: root.id}).populate('materiaId')
                const materias = planEstudio.map(pe => pe.materiaId)
                return materias
            }
        }
    }
}   