import { GUILD_FINDER_APPLICANT } from '#constants/characters'
import { GuildFinderApplicant } from '#models/characters/GuildFinderApplicant'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GuildFinderApplicantStore extends Core<GuildFinderApplicant> {
  constructor (data_source: DataSource) {
    super({
      model: new GuildFinderApplicant,
      store: data_source.getRepository(GUILD_FINDER_APPLICANT),
    })
  }
}