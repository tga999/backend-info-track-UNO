import mongoose, { Schema } from 'mongoose';

const ComisionSchema = new Schema({
    materiaId: {
        type: Schema.ObjectId,
        ref: 'Materia',
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    aula: {
        type: Boolean,
        required: true,
        default: true
    },
    laboratorio: {
        type: Boolean,
        required: true,
        default: false
    },
    profesores: [{
        type: String,
        required: true
    }] 
}); 

export const Comision = mongoose.model('Comision', ComisionSchema);
