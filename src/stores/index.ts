import { AuthStores, initAuthStores } from '#stores/auth'
import { CharactersStores, initCharactersStores } from '#stores/characters'
import { STORE_AUTH, STORE_CHARACTERS } from "#constants"
import { DataSource } from 'typeorm'

export type Stores = {
  [STORE_AUTH]: AuthStores,
  [STORE_CHARACTERS]: CharactersStores,
}