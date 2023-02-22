import { ARENA_TEAM } from '#constants/characters'
import { ArenaTeam } from '#models/characters/ArenaTeam'
import { DataSource } from 'typeorm'
import Core from '#core'

export class ArenaTeamStore extends Core<ArenaTeam> {
  constructor (data_source: DataSource) {
    super({
      model: new ArenaTeam,
      store: data_source.getRepository(ARENA_TEAM),
    })
  }
}