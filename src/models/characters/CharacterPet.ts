import { CHARACTER_PET, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity, Index } from 'typeorm'

@Index('owner', ['owner'], {})
@Index('idx_slot', ['slot'], {})
@Entity(CHARACTER_PET, { schema: STORE_CHARACTERS })
export class CharacterPet {
  @Column('int', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => '0',
  })
  id!: number

  @Column('int', { name: 'entry', unsigned: true, default: () => '0' })
  entry!: number

  @Column('int', { name: 'owner', unsigned: true, default: () => '0' })
  owner!: number

  @Column('int', {
    name: 'modelid',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  modelid!: Nullable<number>

  @Column('int', {
    name: 'CreatedBySpell',
    unsigned: true,
    default: () => '0',
  })
  createdBySpell!: number

  @Column('tinyint', { name: 'PetType', unsigned: true, default: () => '0' })
  petType!: number

  @Column('smallint', { name: 'level', unsigned: true, default: () => '1' })
  level!: number

  @Column('int', { name: 'exp', unsigned: true, default: () => '0' })
  exp!: number

  @Column('tinyint', {
    name: 'Reactstate',
    unsigned: true,
    default: () => '0',
  })
  reactstate!: number

  @Column('varchar', { name: 'name', length: 21, default: () => 'Pet' })
  name!: string

  @Column('tinyint', { name: 'renamed', unsigned: true, default: () => '0' })
  renamed!: number

  @Column('tinyint', { name: 'active', unsigned: true, default: () => '0' })
  active!: number

  @Column('tinyint', { name: 'slot', unsigned: true, default: () => '0' })
  slot!: number

  @Column('int', { name: 'curhealth', unsigned: true, default: () => '1' })
  curhealth!: number

  @Column('int', { name: 'curmana', unsigned: true, default: () => '0' })
  curmana!: number

  @Column('int', { name: 'savetime', unsigned: true, default: () => '0' })
  savetime!: number

  @Column('text', { name: 'abdata', nullable: true })
  abdata!: Nullable<string>
}
