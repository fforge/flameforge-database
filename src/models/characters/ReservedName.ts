import { RESERVED_NAME, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(RESERVED_NAME, { schema: STORE_CHARACTERS })
export class ReservedName {
  @Column('varchar', {
    primary: true,
    name: 'name',
    length: 12,
    default: () => '',
  })
  name!: string
}
