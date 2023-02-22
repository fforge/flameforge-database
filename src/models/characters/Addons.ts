import { ADDONS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ADDONS, { schema: STORE_CHARACTERS })
export class Addons {
  @Column('varchar', {
    primary: true,
    name: 'name',
    length: 120,
    default: () => '',
  })
  name!: string

  @Column('int', { name: 'crc', unsigned: true, default: () => '0' })
  crc!: number
}
