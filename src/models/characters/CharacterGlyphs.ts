import { CHARACTER_GLYPHS, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_GLYPHS, { schema: STORE_CHARACTERS })
export class CharacterGlyphs {
  @Column('int', { primary: true, name: 'guid', unsigned: true })
  guid!: number

  @Column('tinyint', {
    primary: true,
    name: 'talentGroup',
    unsigned: true,
    default: () => '0',
  })
  talentGroup!: number

  @Column('smallint', {
    name: 'glyph1',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  glyph1!: Nullable<number>

  @Column('smallint', {
    name: 'glyph2',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  glyph2!: Nullable<number>

  @Column('smallint', {
    name: 'glyph3',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  glyph3!: Nullable<number>

  @Column('smallint', {
    name: 'glyph4',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  glyph4!: Nullable<number>

  @Column('smallint', {
    name: 'glyph5',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  glyph5!: Nullable<number>

  @Column('smallint', {
    name: 'glyph6',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  glyph6!: Nullable<number>

  @Column('smallint', {
    name: 'glyph7',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  glyph7!: Nullable<number>

  @Column('smallint', {
    name: 'glyph8',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  glyph8!: Nullable<number>

  @Column('smallint', {
    name: 'glyph9',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  glyph9!: Nullable<number>
}
