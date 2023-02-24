import { CHARACTER_GLYPHS } from '#constants/characters'
import { CharacterGlyphs } from '#models/characters/CharacterGlyphs'
import { DataSource } from 'typeorm'
import Core from '#core'

export class CharacterGlyphsStore extends Core<CharacterGlyphs> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  CharacterGlyphs,
      store: data_source.getRepository(CHARACTER_GLYPHS),
    })
  }
}