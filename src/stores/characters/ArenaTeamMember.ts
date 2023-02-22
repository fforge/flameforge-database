import { ARENA_TEAM_MEMBER } from '#constants/characters'
import { ArenaTeamMember } from '#models/characters/ArenaTeamMember'
import { DataSource } from 'typeorm'
import Core from '#core'

export class ArenaTeamMemberStore extends Core<ArenaTeamMember> {
  constructor (data_source: DataSource) {
    super({
      model: new ArenaTeamMember,
      store: data_source.getRepository(ARENA_TEAM_MEMBER),
    })
  }
}