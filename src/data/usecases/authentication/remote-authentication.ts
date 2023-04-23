import { type HttpPostClient } from 'data/protocols/http/http-post-client'
import { HttpStatusCode } from 'data/protocols/http/http-response'
import { InvalidCredentialsError } from 'domain/errors/invalid-credentials-error'
import { UnexpectedError } from 'domain/errors/unexpected-error'
import { type Authentication, type AuthenticationDTO } from 'domain/usecases/authentication'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationDTO.Params, AuthenticationDTO.Result>
  ) { }

  async auth (params: AuthenticationDTO.Params): Promise<AuthenticationDTO.Result> {
    const httpReponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpReponse.statusCode) {
      case HttpStatusCode.ok:
        return httpReponse.body
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
