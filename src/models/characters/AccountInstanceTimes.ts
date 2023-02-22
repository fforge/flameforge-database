import { ACCOUNT_INSTANCE_TIMES, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ACCOUNT_INSTANCE_TIMES, { schema: STORE_CHARACTERS })
export class AccountInstanceTimes {
  @Column('int', { primary: true, name: 'accountId', unsigned: true })
  accountId!: number

  @Column('int', {
    primary: true,
    name: 'instanceId',
    unsigned: true,
    default: () => '0',
  })
  instanceId!: number

  @Column('bigint', {
    name: 'releaseTime',
    unsigned: true,
    default: () => '0',
  })
  releaseTime!: string
}
