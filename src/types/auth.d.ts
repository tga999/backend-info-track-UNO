import type { IUser } from "./user.js"

export type Context = {
  currentUser: IUser
}

export type JwtPayload = {
  id: string
}