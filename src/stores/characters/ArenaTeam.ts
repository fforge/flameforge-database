import { ARENA_TEAM } from '#constants/characters'
import { ArenaTeam } from '#models/characters/ArenaTeam'
import { DataSource } from 'typeorm'
import Core from '#core'

export class ArenaTeamStore extends Core<ArenaTeam> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: ArenaTeam,
      name: ARENA_TEAM,
      store: data_source.getRepository(ARENA_TEAM),
    })
  }
}