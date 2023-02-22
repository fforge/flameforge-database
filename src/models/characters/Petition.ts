import { PETITION, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity, Index } from 'typeorm'

@Index('index_ownerguid_petitionguid', ['ownerguid', 'petitionguid'], {
  unique: true,
})
@Entity(PETITION, { schema: STORE_CHARACTERS })
export class Petition {
  @Column('int', { primary: true, name: 'ownerguid', unsigned: true })
  ownerguid!: number

  @Column('int', {
    name: 'petitionguid',
    nullable: true,
    unsigned: true,
    default: () => '0',
  })
  petitionguid!: Nullable<number>

  @Column('varchar', { name: 'name', length: 24 })
  name!: string

  @Column('tinyint', {
    primary: true,
    name: 'type',
    unsigned: true,
    default: () => '0',
  })
  type!: number
}
