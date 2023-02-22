import { GUILD_FINDER_GUILD_SETTINGS, STORE_CHARACTERS } from '#constants'
import { Nullable } from '#types'
import { Column, Entity } from 'typeorm'

@Entity(GUILD_FINDER_GUILD_SETTINGS, { schema: STORE_CHARACTERS })
export class GuildFinderGuildSettings {
  @Column('int', { primary: true, name: 'guildId', unsigned: true })
  guildId!: number

  @Column('tinyint', {
    name: 'availability',
    unsigned: true,
    default: () => '0',
  })
  availability!: number

  @Column('tinyint', {
    name: 'classRoles',
    unsigned: true,
    default: () => '0',
  })
  classRoles!: number

  @Column('tinyint', {
    name: 'interests',
    unsigned: true,
    default: () => '0',
  })
  interests!: number

  @Column('tinyint', { name: 'level', unsigned: true, default: () => '1' })
  level!: number

  @Column('tinyint', { name: 'listed', unsigned: true, default: () => '0' })
  listed!: number

  @Column('varchar', { name: 'comment', nullable: true, length: 255 })
  comment!: Nullable<string>
}
