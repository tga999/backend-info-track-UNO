import type { LoginUser, RegisterUser } from "../../types/user.js"
import { User } from "../../database/models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { validateLoginInput, validateRegisterInput } from "../../validators/userValidator.js"

dotenv.config()

export const userResolver = () => {
  return {
    Mutation: {
      registrarUsuario: async (_: unknown, args: RegisterUser) => {
        // Validar datos
        const data = validateRegisterInput(args)
        
        // Comprobar si ya existe un usuario con el mismo mail
        const userExiste = await User.findOne({email: data.email})
        if(userExiste) throw new Error('Usuario existente')
        
        // Cifrar la contraseña
        const passwordCifrada = bcrypt.hashSync(data.password, 10)
        
        // Guardamos usuario en la base de datos
        const user = new User({
          nombre: data.nombre,
          apellido: data.apellido,
          email: data.email,
          password: passwordCifrada
        })

        return await user.save()
      },
      loguearUsuario: async (_: unknown, args: LoginUser) => {
        // Validar datos
        const data = validateLoginInput(args)

        // Validar que exista el usuario
        const userExiste = await User.findOne({email: data.email})
        if(!userExiste) throw new Error('Usuario no existe')

        // Validar la contraseña
        const passwordValidada = bcrypt.compareSync(data.password, userExiste.password)
        if(!passwordValidada) throw new Error('Contraseña incorrecta')
        
        // Crear token
        const privateKey = process.env.JWT_SECRET
        if(!privateKey) throw new Error('Internal server error: No hay private key')

        return jwt.sign({id: userExiste._id, role: userExiste.role}, privateKey)
      }
    }
  }
}