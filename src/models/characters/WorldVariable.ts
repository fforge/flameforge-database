import { STORE_CHARACTERS, WORLD_VARIABLE } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(WORLD_VARIABLE, { schema: STORE_CHARACTERS })
export class WorldVariable {
  @Column('varchar', { primary: true, name: 'ID', length: 64 })
  id!: string

  @Column('int', { name: 'Value', default: () => '0' })
  value!: number
}
