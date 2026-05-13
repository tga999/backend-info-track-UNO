export type IUser = {
  id: string
  nombre: string
  apellido: string
  password: string
  email: string
  role: string
  materias: MateriaUser[]
  carreras: string[]
}

type MateriaUser = {
  materiaId: string
  estado: EstadoMateria
  year: number
  cuatrimestre: number
  llamadosUsados?: number
  vencimiento?: Date
  notaFinal?: number
}

enum EstadoMateria {
  APROBADO = "aprobado",
  REGULARIZADA = "regularizada",
  CURSANDO = "cursando",
  PROMOCIONADA = "promocionada"
}

// Inputs en mutation
export type RegisterUser = {
  nombre: string
  apellido: string
  password: string
  email: string
}

export type LoginUser = {
  email: string
  password: string
}

export type EstablecerEstadoMateria = {
  idMateria: string
  estado: EstadoMateria
  year: number
  cuatrimestre: number
  nota?: number 
}