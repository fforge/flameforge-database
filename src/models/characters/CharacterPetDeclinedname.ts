import { CHARACTER_PET_DECLINEDNAME, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index } from 'typeorm'

@Index('owner_key', ['owner'], {})
@Entity(CHARACTER_PET_DECLINEDNAME, { schema: STORE_CHARACTERS })
export class CharacterPetDeclinedname {
  @Column('int', {
    primary: true,
    name: 'id',
    unsigned: true,
    default: () => '0',
  })
  id!: number

  @Column('int', { name: 'owner', unsigned: true, default: () => '0' })
  owner!: number

  @Column('varchar', { name: 'genitive', length: 12, default: () => '' })
  genitive!: string

  @Column('varchar', { name: 'dative', length: 12, default: () => '' })
  dative!: string

  @Column('varchar', { name: 'accusative', length: 12, default: () => '' })
  accusative!: string

  @Column('varchar', { name: 'instrumental', length: 12, default: () => '' })
  instrumental!: string

  @Column('varchar', { name: 'prepositional', length: 12, default: () => '' })
  prepositional!: string
}
