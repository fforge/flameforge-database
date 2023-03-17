import { Stores } from "#stores"
import { AuthStores } from "#stores/auth"
import { CharactersStores } from "#stores/characters"

export type AuthStore = keyof AuthStores
export type CharactersStore = keyof CharactersStores
export type Store = keyof Stores
export type Model = AuthStore | CharactersStore

export class DatabaseDocument {
  id?: string
}

export class ReqResBase {
  method?: any
  model?: Model
  store?: Store
}

export class Request extends ReqResBase {
  payload?: any
  query?: {
    filters?: any
    options?: {
      skip?: number
      limit?: number
      sort?: any
    }
    populate?: {
      fields?: string[]
    }
  }
}

export interface MongoQueryOptions <T> {
  limit?: number
  skip?: number
}

export type Nullable<T> = T | null