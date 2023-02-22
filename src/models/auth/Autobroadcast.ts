import { AUTOBROADCAST, STORE_AUTH } from '#constants'
import { Nullable } from '#types'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity(AUTOBROADCAST, { schema: STORE_AUTH })
export class Autobroadcast {
  @Column('int', { primary: true, name: 'realmid', default: () => '-1' })
  realmid!: number

  @PrimaryGeneratedColumn({ type: 'tinyint', name: 'id', unsigned: true })
  id!: number

  @Column('tinyint', {
    name: 'weight',
    nullable: true,
    unsigned: true,
    default: () => '1',
  })
  weight!: Nullable<number>

  @Column('longtext', { name: 'text' })
  text!: string
}
