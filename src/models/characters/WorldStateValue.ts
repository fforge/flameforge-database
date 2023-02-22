import { STORE_CHARACTERS, WORLD_STATE_VALUE } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(WORLD_STATE_VALUE, { schema: STORE_CHARACTERS })
export class WorldStateValue {
  @Column('int', { primary: true, name: 'Id' })
  id!: number

  @Column('int', { name: 'Value' })
  value!: number
}
