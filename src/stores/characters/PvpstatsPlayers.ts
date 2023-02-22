import { PVPSTATS_PLAYERS } from '#constants/characters'
import { PvpstatsPlayers } from '#models/characters/PvpstatsPlayers'
import { DataSource } from 'typeorm'
import Core from '#core'

export class PvpstatsPlayersStore extends Core<PvpstatsPlayers> {
  constructor (data_source: DataSource) {
    super({
      model: new PvpstatsPlayers,
      store: data_source.getRepository(PVPSTATS_PLAYERS),
    })
  }
}