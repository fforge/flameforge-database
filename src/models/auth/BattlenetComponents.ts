import { BATTLENET_COMPONENTS, STORE_AUTH } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(BATTLENET_COMPONENTS, { schema: STORE_AUTH })
export class BattlenetComponents {
  @Column('varchar', { primary: true, name: 'Program', length: 4 })
  program!: string

  @Column('varchar', { primary: true, name: 'Platform', length: 4 })
  platform!: string

  @Column('int', { primary: true, name: 'Build', unsigned: true })
  build!: number
}
