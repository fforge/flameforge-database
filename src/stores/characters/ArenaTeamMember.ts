import { ARENA_TEAM_MEMBER } from '#constants/characters'
import { ArenaTeamMember } from '#models/characters/ArenaTeamMember'
import { DataSource } from 'typeorm'
import Core from '#core'

export class ArenaTeamMemberStore extends Core<ArenaTeamMember> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: ArenaTeamMember,
      name: ARENA_TEAM_MEMBER,
      store: data_source.getRepository(ARENA_TEAM_MEMBER),
    })
  }
}