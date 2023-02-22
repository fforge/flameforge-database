import { CHARACTER_QUESTSTATUS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_QUESTSTATUS, { schema: STORE_CHARACTERS })
export class CharacterQueststatus {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', {
    primary: true,
    name: 'quest',
    comment: 'Quest Identifier',
    unsigned: true,
    default: () => '0',
  })
  quest!: number

  @Column('tinyint', { name: 'status', unsigned: true, default: () => '0' })
  status!: number

  @Column('tinyint', { name: 'explored', unsigned: true, default: () => '0' })
  explored!: number

  @Column('int', { name: 'timer', unsigned: true, default: () => '0' })
  timer!: number

  @Column('smallint', {
    name: 'mobcount1',
    unsigned: true,
    default: () => '0',
  })
  mobcount1!: number

  @Column('smallint', {
    name: 'mobcount2',
    unsigned: true,
    default: () => '0',
  })
  mobcount2!: number

  @Column('smallint', {
    name: 'mobcount3',
    unsigned: true,
    default: () => '0',
  })
  mobcount3!: number

  @Column('smallint', {
    name: 'mobcount4',
    unsigned: true,
    default: () => '0',
  })
  mobcount4!: number

  @Column('smallint', {
    name: 'itemcount1',
    unsigned: true,
    default: () => '0',
  })
  itemcount1!: number

  @Column('smallint', {
    name: 'itemcount2',
    unsigned: true,
    default: () => '0',
  })
  itemcount2!: number

  @Column('smallint', {
    name: 'itemcount3',
    unsigned: true,
    default: () => '0',
  })
  itemcount3!: number

  @Column('smallint', {
    name: 'itemcount4',
    unsigned: true,
    default: () => '0',
  })
  itemcount4!: number

  @Column('smallint', {
    name: 'itemcount5',
    unsigned: true,
    default: () => '0',
  })
  itemcount5!: number

  @Column('smallint', {
    name: 'itemcount6',
    unsigned: true,
    default: () => '0',
  })
  itemcount6!: number

  @Column('smallint', {
    name: 'playercount',
    unsigned: true,
    default: () => '0',
  })
  playercount!: number
}
