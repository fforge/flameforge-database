import { CHARACTER_DECLINEDNAME, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_DECLINEDNAME, { schema: STORE_CHARACTERS })
export class CharacterDeclinedname {
  @Column('int', {
    primary: true,
    name: 'guid',
    comment: 'Global Unique Identifier',
    unsigned: true,
    default: () => '0',
  })
  guid!: number

  @Column('varchar', { name: 'genitive', length: 15, default: () => '' })
  genitive!: string

  @Column('varchar', { name: 'dative', length: 15, default: () => '' })
  dative!: string

  @Column('varchar', { name: 'accusative', length: 15, default: () => '' })
  accusative!: string

  @Column('varchar', { name: 'instrumental', length: 15, default: () => '' })
  instrumental!: string

  @Column('varchar', { name: 'prepositional', length: 15, default: () => '' })
  prepositional!: string
}
