import { CHARACTER_STATS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_STATS, { schema: STORE_CHARACTERS })
export class CharacterStats {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier, Low part',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', { name: 'maxhealth', unsigned: true, default: () => '0' })
  maxhealth!: number

  @Column('int', { name: 'maxpower1', unsigned: true, default: () => '0' })
  maxpower1!: number

  @Column('int', { name: 'maxpower2', unsigned: true, default: () => '0' })
  maxpower2!: number

  @Column('int', { name: 'maxpower3', unsigned: true, default: () => '0' })
  maxpower3!: number

  @Column('int', { name: 'maxpower4', unsigned: true, default: () => '0' })
  maxpower4!: number

  @Column('int', { name: 'maxpower5', unsigned: true, default: () => '0' })
  maxpower5!: number

  @Column('int', { name: 'strength', unsigned: true, default: () => '0' })
  strength!: number

  @Column('int', { name: 'agility', unsigned: true, default: () => '0' })
  agility!: number

  @Column('int', { name: 'stamina', unsigned: true, default: () => '0' })
  stamina!: number

  @Column('int', { name: 'intellect', unsigned: true, default: () => '0' })
  intellect!: number

  @Column('int', { name: 'spirit', unsigned: true, default: () => '0' })
  spirit!: number

  @Column('int', { name: 'armor', unsigned: true, default: () => '0' })
  armor!: number

  @Column('int', { name: 'resHoly', unsigned: true, default: () => '0' })
  resHoly!: number

  @Column('int', { name: 'resFire', unsigned: true, default: () => '0' })
  resFire!: number

  @Column('int', { name: 'resNature', unsigned: true, default: () => '0' })
  resNature!: number

  @Column('int', { name: 'resFrost', unsigned: true, default: () => '0' })
  resFrost!: number

  @Column('int', { name: 'resShadow', unsigned: true, default: () => '0' })
  resShadow!: number

  @Column('int', { name: 'resArcane', unsigned: true, default: () => '0' })
  resArcane!: number

  @Column('float', {
    name: 'blockPct',
    unsigned: true,
    precision: 12,
    default: () => '0',
  })
  blockPct!: number

  @Column('float', {
    name: 'dodgePct',
    unsigned: true,
    precision: 12,
    default: () => '0',
  })
  dodgePct!: number

  @Column('float', {
    name: 'parryPct',
    unsigned: true,
    precision: 12,
    default: () => '0',
  })
  parryPct!: number

  @Column('float', {
    name: 'critPct',
    unsigned: true,
    precision: 12,
    default: () => '0',
  })
  critPct!: number

  @Column('float', {
    name: 'rangedCritPct',
    unsigned: true,
    precision: 12,
    default: () => '0',
  })
  rangedCritPct!: number

  @Column('float', {
    name: 'spellCritPct',
    unsigned: true,
    precision: 12,
    default: () => '0',
  })
  spellCritPct!: number

  @Column('int', { name: 'attackPower', unsigned: true, default: () => '0' })
  attackPower!: number

  @Column('int', {
    name: 'rangedAttackPower',
    unsigned: true,
    default: () => '0',
  })
  rangedAttackPower!: number

  @Column('int', { name: 'spellPower', unsigned: true, default: () => '0' })
  spellPower!: number

  @Column('int', { name: 'resilience', unsigned: true, default: () => '0' })
  resilience!: number
}
