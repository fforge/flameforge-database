import { CHARACTER_QUESTSTATUS_REWARDED } from '#constants/characters'
import { CharacterQueststatusRewarded } from '#models/characters/CharacterQueststatusRewarded'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterQueststatusRewardedStore extends Core<CharacterQueststatusRewarded> {
  constructor (data_source: DataSource) {
    super({
      model: new CharacterQueststatusRewarded,
      store: data_source.getRepository(CHARACTER_QUESTSTATUS_REWARDED),
    })
  }
}