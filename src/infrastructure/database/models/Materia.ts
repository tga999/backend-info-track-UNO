import mongoose, { Schema } from 'mongoose';

const MateriaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true,
        unique: true
    },
    cargaHoraria: {
        type: Number,
        required: true 
    },
    electiva: { 
        type: Boolean,
        required: true
    },
    linkCampus: {
        type: String,
        required: true
    },
    linkWhatsapp: {
        type: String,
        required: true
    },
    promocion: {
        type: Boolean,
        required: true,
        default: false
    }
});

export const Materia = mongoose.model('Materia', MateriaSchema);