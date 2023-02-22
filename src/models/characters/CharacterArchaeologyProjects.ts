import { CHARACTER_ARCHAEOLOGY_PROJECTS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_ARCHAEOLOGY_PROJECTS, { schema: STORE_CHARACTERS })
export class CharacterArchaeologyProjects {
  @Column('int', { primary: true, name: 'guid', unsigned: true })
  guid!: number

  @Column('tinyint', { primary: true, name: 'branch', unsigned: true })
  branch!: number

  @Column('int', { name: 'project', unsigned: true })
  project!: number
}
