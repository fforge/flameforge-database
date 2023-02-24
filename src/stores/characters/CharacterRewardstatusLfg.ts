import { CHARACTER_REWARDSTATUS_LFG } from '#constants/characters'
import { CharacterRewardstatusLfg } from '#models/characters/CharacterRewardstatusLfg'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterRewardstatusLfgStore extends Core<CharacterRewardstatusLfg> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterRewardstatusLfg,
      store: data_source.getRepository(CHARACTER_REWARDSTATUS_LFG),
    })
  }
}