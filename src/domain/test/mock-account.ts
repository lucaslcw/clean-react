import { faker } from '@faker-js/faker'

import { type AccountModel } from 'domain/models/account-model'
import { type AuthenticationDTO } from 'domain/usecases/authentication'

export const mockAuthentication = (): AuthenticationDTO.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid()
})
