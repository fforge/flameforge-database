import { CHARACTERS, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity, Index } from 'typeorm'

@Index('idx_account', ['account'], {})
@Index('idx_online', ['online'], {})
@Index('idx_name', ['name'], {})
@Entity(CHARACTERS, { schema: STORE_CHARACTERS })
export class Characters {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('int', {
    name: 'account',
    comment: 'Account Identifier',
    unsigned: true,
    default: () => '0',
  })
  account!: number

  @Column('varchar', { name: 'name', length: 12 })
  name!: string

  @Column('tinyint', { name: 'slot', unsigned: true, default: () => '0' })
  slot!: number

  @Column('tinyint', { name: 'race', unsigned: true, default: () => '0' })
  race!: number

  @Column('tinyint', { name: 'class', unsigned: true, default: () => '0' })
  class!: number

  @Column('tinyint', { name: 'gender', unsigned: true, default: () => '0' })
  gender!: number

  @Column('tinyint', { name: 'level', unsigned: true, default: () => '0' })
  level!: number

  @Column('int', { name: 'xp', unsigned: true, default: () => '0' })
  xp!: number

  @Column('bigint', { name: 'money', unsigned: true, default: () => '0' })
  money!: string

  @Column('tinyint', { name: 'skin', unsigned: true, default: () => '0' })
  skin!: number

  @Column('tinyint', { name: 'face', unsigned: true, default: () => '0' })
  face!: number

  @Column('tinyint', {
    name: 'hairStyle',
    unsigned: true,
    default: () => '0',
  })
  hairStyle!: number

  @Column('tinyint', {
    name: 'hairColor',
    unsigned: true,
    default: () => '0',
  })
  hairColor!: number

  @Column('tinyint', {
    name: 'facialStyle',
    unsigned: true,
    default: () => '0',
  })
  facialStyle!: number

  @Column('tinyint', {
    name: 'bankSlots',
    unsigned: true,
    default: () => '0',
  })
  bankSlots!: number

  @Column('tinyint', {
    name: 'restState',
    unsigned: true,
    default: () => '0',
  })
  restState!: number

  @Column('int', { name: 'playerFlags', unsigned: true, default: () => '0' })
  playerFlags!: number

  @Column('float', { name: 'position_x', precision: 12, default: () => '0' })
  positionX!: number

  @Column('float', { name: 'position_y', precision: 12, default: () => '0' })
  positionY!: number

  @Column('float', { name: 'position_z', precision: 12, default: () => '0' })
  positionZ!: number

  @Column('smallint', {
    name: 'map',
    comment: 'Map Identifier',
    unsigned: true,
    default: () => '0',
  })
  map!: number

  @Column('int', { name: 'instance_id', unsigned: true, default: () => '0' })
  instanceId!: number

  @Column('tinyint', {
    name: 'instance_mode_mask',
    unsigned: true,
    default: () => '0',
  })
  instanceModeMask!: number

  @Column('float', { name: 'orientation', precision: 12, default: () => '0' })
  orientation!: number

  @Column('text', { name: 'taximask' })
  taximask!: string

  @Column('tinyint', { name: 'online', unsigned: true, default: () => '0' })
  online!: number

  @Column('tinyint', {
    name: 'cinematic',
    unsigned: true,
    default: () => '0',
  })
  cinematic!: number

  @Column('int', { name: 'totaltime', unsigned: true, default: () => '0' })
  totaltime!: number

  @Column('int', { name: 'leveltime', unsigned: true, default: () => '0' })
  leveltime!: number

  @Column('int', { name: 'logout_time', unsigned: true, default: () => '0' })
  logoutTime!: number

  @Column('tinyint', {
    name: 'is_logout_resting',
    unsigned: true,
    default: () => '0',
  })
  isLogoutResting!: number

  @Column('float', { name: 'rest_bonus', precision: 12, default: () => '0' })
  restBonus!: number

  @Column('int', {
    name: 'resettalents_cost',
    unsigned: true,
    default: () => '0',
  })
  resettalentsCost!: number

  @Column('int', {
    name: 'resettalents_time',
    unsigned: true,
    default: () => '0',
  })
  resettalentsTime!: number

  @Column('varchar', { name: 'talentTree', length: 10, default: () => '0 0' })
  talentTree!: string

  @Column('float', { name: 'trans_x', precision: 12, default: () => '0' })
  transX!: number

  @Column('float', { name: 'trans_y', precision: 12, default: () => '0' })
  transY!: number

  @Column('float', { name: 'trans_z', precision: 12, default: () => '0' })
  transZ!: number

  @Column('float', { name: 'trans_o', precision: 12, default: () => '0' })
  transO!: number

  @Column('int', { name: 'transguid', unsigned: true, default: () => '0' })
  transguid!: number

  @Column('int', {
    name: 'trans_spawn_id',
    unsigned: true,
    default: () => '0',
  })
  transSpawnId!: number

  @Column('smallint', {
    name: 'extra_flags',
    unsigned: true,
    default: () => '0',
  })
  extraFlags!: number

  @Column('tinyint', {
    name: 'stable_slots',
    unsigned: true,
    default: () => '0',
  })
  stableSlots!: number

  @Column('smallint', {
    name: 'at_login',
    unsigned: true,
    default: () => '0',
  })
  atLogin!: number

  @Column('smallint', { name: 'zone', unsigned: true, default: () => '0' })
  zone!: number

  @Column('int', {
    name: 'death_expire_time',
    unsigned: true,
    default: () => '0',
  })
  deathExpireTime!: number

  @Column('text', { name: 'taxi_path', nullable: true })
  taxiPath!: Nullable<string>

  @Column('int', { name: 'totalKills', unsigned: true, default: () => '0' })
  totalKills!: number

  @Column('smallint', {
    name: 'todayKills',
    unsigned: true,
    default: () => '0',
  })
  todayKills!: number

  @Column('smallint', {
    name: 'yesterdayKills',
    unsigned: true,
    default: () => '0',
  })
  yesterdayKills!: number

  @Column('int', { name: 'chosenTitle', unsigned: true, default: () => '0' })
  chosenTitle!: number

  @Column('int', {
    name: 'watchedFaction',
    unsigned: true,
    default: () => '0',
  })
  watchedFaction!: number

  @Column('tinyint', { name: 'drunk', unsigned: true, default: () => '0' })
  drunk!: number

  @Column('int', { name: 'health', unsigned: true, default: () => '0' })
  health!: number

  @Column('int', { name: 'power1', unsigned: true, default: () => '0' })
  power1!: number

  @Column('int', { name: 'power2', unsigned: true, default: () => '0' })
  power2!: number

  @Column('int', { name: 'power3', unsigned: true, default: () => '0' })
  power3!: number

  @Column('int', { name: 'power4', unsigned: true, default: () => '0' })
  power4!: number

  @Column('int', { name: 'power5', unsigned: true, default: () => '0' })
  power5!: number

  @Column('int', { name: 'latency', unsigned: true, default: () => '0' })
  latency!: number

  @Column('tinyint', {
    name: 'talentGroupsCount',
    unsigned: true,
    default: () => '1',
  })
  talentGroupsCount!: number

  @Column('tinyint', {
    name: 'activeTalentGroup',
    unsigned: true,
    default: () => '0',
  })
  activeTalentGroup!: number

  @Column('longtext', { name: 'exploredZones', nullable: true })
  exploredZones!: Nullable<string>

  @Column('longtext', { name: 'equipmentCache', nullable: true })
  equipmentCache!: Nullable<string>

  @Column('longtext', { name: 'knownTitles', nullable: true })
  knownTitles!: Nullable<string>

  @Column('tinyint', {
    name: 'actionBars',
    unsigned: true,
    default: () => '0',
  })
  actionBars!: number

  @Column('tinyint', {
    name: 'grantableLevels',
    unsigned: true,
    default: () => '0',
  })
  grantableLevels!: number

  @Column('int', {
    name: 'achievementPoints',
    unsigned: true,
    default: () => '0',
  })
  achievementPoints!: number

  @Column('int', {
    name: 'deleteInfos_Account',
    nullable: true,
    unsigned: true,
  })
  deleteInfosAccount!: Nullable<number>

  @Column('varchar', { name: 'deleteInfos_Name', nullable: true, length: 12 })
  deleteInfosName!: Nullable<string>

  @Column('int', { name: 'deleteDate', nullable: true, unsigned: true })
  deleteDate!: Nullable<number>
}
