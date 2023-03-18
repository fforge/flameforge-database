import { GROUP_MEMBER } from '#constants/characters'
import { GroupMember } from '#models/characters/GroupMember'
import { DataSource } from 'typeorm'
import Core from '#core'

export class GroupMemberStore extends Core<GroupMember> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model: GroupMember,
      name: GROUP_MEMBER,
      store: data_source.getRepository(GROUP_MEMBER),
    })
  }
}