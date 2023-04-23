import { type AccountModel } from 'domain/models'

export namespace AuthenticationDTO {
  export type Params = {
    email: string
    password: string
  }
  export type Result = AccountModel
}

export interface Authentication {
  auth: (params: AuthenticationDTO.Params) => Promise<AuthenticationDTO.Result>
}
