
import { DataSource } from 'typeorm'
import { initAuthStores } from '#stores/auth'
import { initCharactersStores } from '#stores/characters'
import { STORE_AUTH, STORE_CHARACTERS } from '#constants'
import { Stores } from '#stores'
import Debug from 'debug'

const debug = Debug('flameforge-database')

export function init(data_source: DataSource): Stores {
  debug('Initializing stores....')
  const stores = {
    [STORE_AUTH]: initAuthStores(data_source),
    [STORE_CHARACTERS]: initCharactersStores(data_source),
  }
  debug('Stores Initialized %s', stores)
  return stores
}
