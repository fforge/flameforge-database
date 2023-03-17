import { STORE_AUTH } from '#constants/auth'
import { STORE_CHARACTERS } from '#constants/characters'

export * from '#constants/auth'
export * from '#constants/characters'

export const STORE_TYPES = [
  STORE_AUTH,
  STORE_CHARACTERS,
] as const

export type StoreType = typeof STORE_TYPES[number]

export const DATASOURCE_TYPE = 'mysql' as const
