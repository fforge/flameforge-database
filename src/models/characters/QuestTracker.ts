import { QUEST_TRACKER, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity } from 'typeorm'

@Entity(QUEST_TRACKER, { schema: STORE_CHARACTERS })
export class QuestTracker {
  @Column('int', { name: 'id', unsigned: true, default: () => '0' })
  id!: number

  @Column('int', {
    name: 'character_guid',
    unsigned: true,
    default: () => '0',
  })
  characterGuid!: number

  @Column('datetime', { name: 'quest_accept_time' })
  questAcceptTime!: Date

  @Column('datetime', { name: 'quest_complete_time', nullable: true })
  questCompleteTime!: Nullable<Date>

  @Column('datetime', { name: 'quest_abandon_time', nullable: true })
  questAbandonTime!: Nullable<Date>

  @Column('tinyint', {
    name: 'completed_by_gm',
    width: 1,
    default: () => '0',
  })
  completedByGm!: boolean

  @Column('varchar', { name: 'core_hash', length: 120, default: () => '0' })
  coreHash!: string

  @Column('varchar', {
    name: 'core_revision',
    length: 120,
    default: () => '0',
  })
  coreRevision!: string
}
