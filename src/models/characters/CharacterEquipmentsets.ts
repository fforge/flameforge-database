import { CHARACTER_EQUIPMENTSETS, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('idx_set', ['guid', 'setguid', 'setindex'], { unique: true })
@Index('Idx_setindex', ['setindex'], {})
@Entity(CHARACTER_EQUIPMENTSETS, { schema: STORE_CHARACTERS })
export class CharacterEquipmentsets {
  @Column('int', { name: 'guid', unsigned: true, default: () => '0' })
  guid!: number

  @PrimaryGeneratedColumn({ type: 'bigint', name: 'setguid', unsigned: true })
  setguid!: string

  @Column('tinyint', { name: 'setindex', unsigned: true, default: () => '0' })
  setindex!: number

  @Column('varchar', { name: 'name', length: 31 })
  name!: string

  @Column('varchar', { name: 'iconname', length: 100 })
  iconname!: string

  @Column('int', { name: 'ignore_mask', unsigned: true, default: () => '0' })
  ignoreMask!: number

  @Column('int', { name: 'item0', unsigned: true, default: () => '0' })
  item0!: number

  @Column('int', { name: 'item1', unsigned: true, default: () => '0' })
  item1!: number

  @Column('int', { name: 'item2', unsigned: true, default: () => '0' })
  item2!: number

  @Column('int', { name: 'item3', unsigned: true, default: () => '0' })
  item3!: number

  @Column('int', { name: 'item4', unsigned: true, default: () => '0' })
  item4!: number

  @Column('int', { name: 'item5', unsigned: true, default: () => '0' })
  item5!: number

  @Column('int', { name: 'item6', unsigned: true, default: () => '0' })
  item6!: number

  @Column('int', { name: 'item7', unsigned: true, default: () => '0' })
  item7!: number

  @Column('int', { name: 'item8', unsigned: true, default: () => '0' })
  item8!: number

  @Column('int', { name: 'item9', unsigned: true, default: () => '0' })
  item9!: number

  @Column('int', { name: 'item10', unsigned: true, default: () => '0' })
  item10!: number

  @Column('int', { name: 'item11', unsigned: true, default: () => '0' })
  item11!: number

  @Column('int', { name: 'item12', unsigned: true, default: () => '0' })
  item12!: number

  @Column('int', { name: 'item13', unsigned: true, default: () => '0' })
  item13!: number

  @Column('int', { name: 'item14', unsigned: true, default: () => '0' })
  item14!: number

  @Column('int', { name: 'item15', unsigned: true, default: () => '0' })
  item15!: number

  @Column('int', { name: 'item16', unsigned: true, default: () => '0' })
  item16!: number

  @Column('int', { name: 'item17', unsigned: true, default: () => '0' })
  item17!: number

  @Column('int', { name: 'item18', unsigned: true, default: () => '0' })
  item18!: number
}
