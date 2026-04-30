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
