import {
  type HttpPostParams,
  type HttpPostClient,
  type HttpResponse,
  HttpStatusCode
} from 'data/protocols/http'

export class HttpPostClientSpy<T, K> implements HttpPostClient<T, K> {
  url?: string
  body?: T
  response: HttpResponse<K> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams<T>): Promise<HttpResponse<K>> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
