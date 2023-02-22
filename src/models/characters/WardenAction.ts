import { STORE_CHARACTERS, WARDEN_ACTION } from '#constants'
import { Nullable } from '#types'
import { Column, Entity } from 'typeorm'

@Entity(WARDEN_ACTION, { schema: STORE_CHARACTERS })
export class WardenAction {
  @Column('smallint', { primary: true, name: 'wardenId', unsigned: true })
  wardenId!: number

  @Column('tinyint', { name: 'action', nullable: true, unsigned: true })
  action!: Nullable<number>
}
