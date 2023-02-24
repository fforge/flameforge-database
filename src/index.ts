import { DataSource } from 'typeorm'
import { AuthStores, initAuthStores } from '#stores/auth'
import { CharactersStores, initCharactersStores } from '#stores/characters'
import { Store } from '#types'
import { STORE_AUTH, STORE_CHARACTERS } from '#constants'
import Debug from 'debug'

const debug = Debug('flameforge-database')

export function init(store: Store, data_source: DataSource): AuthStores | CharactersStores {
  debug('Initializing stores....')
  const stores = {
    [STORE_AUTH]: initAuthStores,
    [STORE_CHARACTERS]: initCharactersStores,
  }
  debug('Stores Initialized %o', stores)
  return stores[store](data_source)
}
