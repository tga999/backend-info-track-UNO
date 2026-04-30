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
    salon: {
        numero: Number,
        tipo: String
    },
    profesores: [{
        type: Schema.ObjectId,
        ref: 'Profesor'
    }] 
}); 

export const Comision = mongoose.model('Comision', ComisionSchema);
