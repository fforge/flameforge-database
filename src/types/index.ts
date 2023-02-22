import { stores } from "#stores"
import { auth_stores } from "#stores/auth"
import { characters_stores } from "#stores/characters"

export type AuthStore = keyof typeof auth_stores
export type CharactersStore = keyof typeof characters_stores
export type Store = keyof typeof stores
export type Model = AuthStore | CharactersStore

export class DatabaseDocument {
  id?: string
}

export class ReqResBase {
  method?: any
  model!: Model
  store!: Store
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