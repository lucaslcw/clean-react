import { type HttpPostClient, HttpStatusCode } from 'data/protocols/http'
import { UnexpectedError, InvalidCredentialsError } from 'domain/errors'
import { type Authentication, type AuthenticationDTO } from 'domain/usecases'

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
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
