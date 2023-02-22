import { auth_stores } from '#stores/auth'
import { characters_stores } from '#stores/characters'
import { STORE_AUTH, STORE_CHARACTERS } from "#constants"

export const stores = {
  [STORE_AUTH]: auth_stores,
  [STORE_CHARACTERS]: characters_stores,
}

// export function init(): Storage {
//   return {
//     [ACCOUNT]: new AccountStore,
//   }
// }