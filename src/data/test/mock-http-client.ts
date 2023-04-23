import { type HttpPostParams, type HttpPostClient } from 'data/protocols/http/http-post-client'
import { HttpStatusCode, type HttpResponse } from 'data/protocols/http/http-response'

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
