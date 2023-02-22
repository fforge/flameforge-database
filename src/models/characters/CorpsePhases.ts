import { CORPSE_PHASES, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CORPSE_PHASES, { schema: STORE_CHARACTERS })
export class CorpsePhases {
  @Column('int', {
    primary: true,
    name: 'OwnerGuid',
    unsigned: true,
    default: () => '0',
  })
  ownerGuid!: number

  @Column('int', { primary: true, name: 'PhaseId', unsigned: true })
  phaseId!: number
}
