import { PETITION_SIGN, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('Idx_playerguid', ['playerguid'], {})
@Index('Idx_ownerguid', ['ownerguid'], {})
@Entity(PETITION_SIGN, { schema: STORE_CHARACTERS })
export class PetitionSign {
  @Column('int', { name: 'ownerguid', unsigned: true })
  ownerguid!: number

  @Column('int', {
    primary: true,
    name: 'petitionguid',
    unsigned: true,
    default: () => '0',
  })
  petitionguid!: number

  @Column('int', {
    primary: true,
    name: 'playerguid',
    unsigned: true,
    default: () => '0',
  })
  playerguid!: number

  @Column('int', {
    name: 'player_account',
    unsigned: true,
    default: () => '0',
  })
  playerAccount!: number

  @Column('tinyint', { name: 'type', unsigned: true, default: () => '0' })
  type!: number
}
