// Inputs en mutation
enum EstadoMateria {
  APROBADO = "aprobado",
  REGULARIZADA = "regularizada",
  CURSANDO = "cursando",
  PROMOCIONADA = "promocionada"
}

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