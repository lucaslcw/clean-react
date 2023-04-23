import { type HttpPostClient } from 'data/protocols/http/http-post-client'
import { HttpStatusCode } from 'data/protocols/http/http-response'
import { InvalidCredentialsError } from 'domain/errors/invalid-credentials-error'
import { type AuthenticationDTO } from 'domain/usecases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }

  async auth (params: AuthenticationDTO.Params): Promise<void> {
    const httpReponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpReponse.statusCode) {
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError()
    }
  }
}
