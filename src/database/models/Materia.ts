import mongoose, { Schema } from 'mongoose';
import { string } from 'zod';

const MateriaSchema = new Schema({
    _id: String,
    nombre: {
        type: String,
        required: true
    },
    cargaHorariaSemanal:{
        type: Number,
        required: true
    },
    cargaHorariaTotal: {
        type: Number,
        required: true 
    },
    electiva: { 
        type: Boolean,
        default: false
    },
    linkCampus: String,
    linkWhatsapp: String,
    promocion: {
        type: Boolean,
        default: false
    }
});

export const Materia = mongoose.model('Materia', MateriaSchema);
