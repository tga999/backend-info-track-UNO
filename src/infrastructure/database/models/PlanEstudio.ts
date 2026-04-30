import mongoose, { Schema } from "mongoose"

const PlanEstudioSchema = new Schema({
    carreraId: {   
        type: Schema.ObjectId,
        ref: 'Carrera',
        required: true
    },
    materiaId: {    
        type: Schema.ObjectId,
        ref: 'Materia',
        required: true  
    },
    anio: {
        type: Number,   
        required: true
    },
    cuatrimestre: {
        type: String,   
        required: true
    },
    correlativas: [{
        type: Schema.ObjectId,
        ref: 'Materia'
    }]
})  

export const PlanEstudio = mongoose.model('PlanEstudio', PlanEstudioSchema)
