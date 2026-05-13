import mongoose, { Schema } from "mongoose"

const ProfesorSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true
    },
    ratings: [
        {
            usuarioId: {
                type: Schema.ObjectId,
                ref: 'Usuario'
            },
            rate: {
                type: Number,
                unique: false,
                required: true,
                min: 1,
                max: 5
            },
            comentario: String,
            fechaDelRate: {
                type: Date,
                default: Date.now
            }
        }   
    ],
    linkCampus: {  
        type: String,
        required: true
    },  
    ratingCount: {
        type: Number,
        default: 0
    }, 
    ratingPromedio: {
        type: Number,
        default: 0  
    },
    materias: [{
        type: Schema.ObjectId,
        ref: 'Materia'
    }]
})

export const Profesor = mongoose.model('Profesor', ProfesorSchema)
