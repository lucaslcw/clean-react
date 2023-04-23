import { type HttpResponse } from 'data/protocols/http'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, K> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<K>>
}
