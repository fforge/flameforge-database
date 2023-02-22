import { CHARACTER_CUF_PROFILES, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('index', ['id'], {})
@Entity(CHARACTER_CUF_PROFILES, { schema: STORE_CHARACTERS })
export class CharacterCufProfiles {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Character Guid',
    unsigned: true,
  })
  guid!: number

  @Column('tinyint', {
    primary: true,
    name: 'id',
    comment: 'Profile Id (0-4)',
    unsigned: true,
  })
  id!: number

  @Column('varchar', { name: 'name', comment: 'Profile Name', length: 12 })
  name!: string

  @Column('smallint', {
    name: 'frameHeight',
    comment: 'Profile Frame Height',
    unsigned: true,
    default: () => '0',
  })
  frameHeight!: number

  @Column('smallint', {
    name: 'frameWidth',
    comment: 'Profile Frame Width',
    unsigned: true,
    default: () => '0',
  })
  frameWidth!: number

  @Column('tinyint', {
    name: 'sortBy',
    comment: 'Frame Sort By',
    unsigned: true,
    default: () => '0',
  })
  sortBy!: number

  @Column('tinyint', {
    name: 'healthText',
    comment: 'Frame Health Text',
    unsigned: true,
    default: () => '0',
  })
  healthText!: number

  @Column('int', {
    name: 'boolOptions',
    comment: 'Many Configurable Bool Options',
    unsigned: true,
    default: () => '0',
  })
  boolOptions!: number

  @Column('tinyint', {
    name: 'unk146',
    comment: 'Profile Unk Int8',
    unsigned: true,
    default: () => '0',
  })
  unk146!: number

  @Column('tinyint', {
    name: 'unk147',
    comment: 'Profile Unk Int8',
    unsigned: true,
    default: () => '0',
  })
  unk147!: number

  @Column('tinyint', {
    name: 'unk148',
    comment: 'Profile Unk Int8',
    unsigned: true,
    default: () => '0',
  })
  unk148!: number

  @Column('smallint', {
    name: 'unk150',
    comment: 'Profile Unk Int16',
    unsigned: true,
    default: () => '0',
  })
  unk150!: number

  @Column('smallint', {
    name: 'unk152',
    comment: 'Profile Unk Int16',
    unsigned: true,
    default: () => '0',
  })
  unk152!: number

  @Column('smallint', {
    name: 'unk154',
    comment: 'Profile Unk Int16',
    unsigned: true,
    default: () => '0',
  })
  unk154!: number
}
