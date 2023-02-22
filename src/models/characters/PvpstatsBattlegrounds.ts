import { PVPSTATS_BATTLEGROUNDS, STORE_CHARACTERS } from '#constants'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity(PVPSTATS_BATTLEGROUNDS, { schema: STORE_CHARACTERS })
export class PvpstatsBattlegrounds {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id!: string

  @Column('tinyint', { name: 'winner_faction' })
  winnerFaction!: number

  @Column('tinyint', { name: 'bracket_id', unsigned: true })
  bracketId!: number

  @Column('tinyint', { name: 'type', unsigned: true })
  type!: number

  @Column('datetime', { name: 'date' })
  date!: Date
}
