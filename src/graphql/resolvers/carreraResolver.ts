import { Carrera }  from "../../database/models/Carrera.js"

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
        Mutation: {
        
        }
    }
}   