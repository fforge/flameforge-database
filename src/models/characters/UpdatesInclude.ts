import { CHARACTERS_UPDATES_INCLUDE, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTERS_UPDATES_INCLUDE, { schema: STORE_CHARACTERS })
export class UpdatesInclude {
  @Column('varchar', {
    primary: true,
    name: 'path',
    comment: 'directory to include. $ means relative to the source directory.',
    length: 200,
  })
  path!: string

  @Column('enum', {
    name: 'state',
    comment: 'defines if the directory contains released or archived updates.',
    enum: ['RELEASED', 'ARCHIVED'],
    default: () => 'RELEASED',
  })
  state!: 'RELEASED' | 'ARCHIVED'
}
