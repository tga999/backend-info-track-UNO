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