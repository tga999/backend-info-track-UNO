import { GraphQLError } from 'graphql'
import * as z from 'zod'

const UserRegister = z.object({
  nombre: z.string().trim()
    .min(3, 'Debe contener más de 3 caracteres')
    .max(40, 'Debe contener menos de 40 caracteres'),
  apellido: z.string().trim()
    .min(3, 'Debe contener más de 3 caracteres')
    .max(40, 'Debe contener menos de 40 caracteres'),
  email: z.email('Email inválido'),
  password: z.string()
    .min(8, 'Debe contener mínimo 8 caracteres')
    .max(100, 'Debe contener menos de 100 caracteres')
    .regex(/[A-Z]/, 'Debe tener al menos una mayúscula')
    .regex(/[0-9]/, 'Debe tener al menos un número')
})

const UserLogin = z.object({
  email: z.email('Email inválido'),
  password: z.string().min(1, 'Contraseña requerida')
})

export const validateRegisterInput = (input: unknown) => {
  const result = z.safeParse(UserRegister, input)
  if(!result.success) {
    // Formatear los errores
    const errors = result.error.issues.map(issue => ({
      field: issue.path[0],
      message: issue.message
    }))

    // Tirar error de graphql
    throw new GraphQLError('Error de validación', {
      extensions: {
        code: 'VALIDATION_ERROR',
        errors
      }
    })
  }
  return result.data
}

export const validateLoginInput = (input: unknown) => {
  const result = z.safeParse(UserLogin, input)
  if(!result.success) {
    // Formatear los errores
    const errors = result.error.issues.map(issue => ({
      field: issue.path[0],
      message: issue.message
    }))

    // Tirar error de graphql
    throw new GraphQLError('Error de validación', {
      extensions: {
        code: 'VALIDATION_ERROR',
        errors
      }
    })
  }
  return result.data
}