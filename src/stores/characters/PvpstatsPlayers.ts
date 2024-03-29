import { PVPSTATS_PLAYERS } from '#constants/characters'
import { PvpstatsPlayers } from '#models/characters/PvpstatsPlayers'
import { DataSource } from 'typeorm'
import Core from '#core'

export class PvpstatsPlayersStore extends Core<PvpstatsPlayers> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: PvpstatsPlayers,
      name: PVPSTATS_PLAYERS,
      store: data_source.getRepository(PVPSTATS_PLAYERS),
    })
  }
}