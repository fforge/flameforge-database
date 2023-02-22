import { GROUP_MEMBER, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(GROUP_MEMBER, { schema: STORE_CHARACTERS })
export class GroupMember {
  @Column('int', { name: 'guid', unsigned: true })
  guid!: number

  @Column('int', { primary: true, name: 'memberGuid', unsigned: true })
  memberGuid!: number

  @Column('tinyint', {
    name: 'memberFlags',
    unsigned: true,
    default: () => '0',
  })
  memberFlags!: number

  @Column('tinyint', { name: 'subgroup', unsigned: true, default: () => '0' })
  subgroup!: number

  @Column('tinyint', { name: 'roles', unsigned: true, default: () => '0' })
  roles!: number
}
