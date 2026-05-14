import mongoose, { Schema } from "mongoose"

const MateriaUsuarioSchema = new Schema({
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
})

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
  materias: [MateriaUsuarioSchema],
  carreras: [{
      type: Schema.ObjectId,
      ref: 'Carrera'
  }]
})

export const User = mongoose.model('Usuario', UsuarioSchema)