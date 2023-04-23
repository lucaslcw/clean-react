import { faker } from '@faker-js/faker'

import { type AuthenticationDTO } from 'domain/usecases/authentication'

export const mockAuthentication = (): AuthenticationDTO.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
