import { AuthStores } from '#stores/auth'
import { CharactersStores } from '#stores/characters'
import { STORE_AUTH, STORE_CHARACTERS } from "#constants"

export type Stores = {
  [STORE_AUTH]: AuthStores,
  [STORE_CHARACTERS]: CharactersStores,
}