import { PET_AURA, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(PET_AURA, { schema: STORE_CHARACTERS })
export class PetAura {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('bigint', {
    primary: true,
    name: 'casterGuid',
    comment: 'Full Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  casterGuid!: string

  @Column('int', {
    primary: true,
    name: 'spell',
    unsigned: true,
    default: () => '0',
  })
  spell!: number

  @Column('tinyint', {
    primary: true,
    name: 'effectMask',
    unsigned: true,
    default: () => '0',
  })
  effectMask!: number

  @Column('tinyint', {
    name: 'recalculateMask',
    unsigned: true,
    default: () => '0',
  })
  recalculateMask!: number

  @Column('tinyint', {
    name: 'stackCount',
    unsigned: true,
    default: () => '1',
  })
  stackCount!: number

  @Column('int', { name: 'amount0' })
  amount0!: number

  @Column('int', { name: 'amount1' })
  amount1!: number

  @Column('int', { name: 'amount2' })
  amount2!: number

  @Column('int', { name: 'base_amount0' })
  baseAmount0!: number

  @Column('int', { name: 'base_amount1' })
  baseAmount1!: number

  @Column('int', { name: 'base_amount2' })
  baseAmount2!: number

  @Column('int', { name: 'maxDuration', default: () => '0' })
  maxDuration!: number

  @Column('int', { name: 'remainTime', default: () => '0' })
  remainTime!: number

  @Column('tinyint', {
    name: 'remainCharges',
    unsigned: true,
    default: () => '0',
  })
  remainCharges!: number

  @Column('float', { name: 'critChance', precision: 12, default: () => '0' })
  critChance!: number

  @Column('tinyint', { name: 'applyResilience', default: () => '0' })
  applyResilience!: number
}
