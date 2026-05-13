import mongoose, { Schema } from "mongoose"
import { required } from "zod/mini"

const UsuarioSchema = new Schema({
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
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  materias: [
    {
      materiaId: {
        type: Schema.ObjectId,
        ref: 'Materia'
      },
      estado: {
        type: String,
        required: true
      },
      year: {
        type: Number,
        required: true
      },
      cuatrimestre: {
        type: Number,
        required: true
      },
      llamadosUsados: Number,
      vencimiento: Date,
      notaFinal: Number
    }
  ],
  carreras: [{
      type: Schema.ObjectId,
      ref: 'Carrera'
  }]
})

export const User = mongoose.model('Usuario', UsuarioSchema)