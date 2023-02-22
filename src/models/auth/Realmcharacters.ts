import { REALMCHARACTERS, STORE_AUTH } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('acctid', ['acctid'], {})
@Entity(REALMCHARACTERS, { schema: STORE_AUTH })
export class Realmcharacters {
  @Column('int', {
    primary: true,
    name: 'realmid',
    unsigned: true,
    default: () => '0',
  })
  realmid!: number

  @Column('int', { primary: true, name: 'acctid', unsigned: true })
  acctid!: number

  @Column('tinyint', { name: 'numchars', unsigned: true, default: () => '0' })
  numchars!: number
}
