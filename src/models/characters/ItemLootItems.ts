import { ITEM_LOOT_ITEMS, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(ITEM_LOOT_ITEMS, { schema: STORE_CHARACTERS })
export class ItemLootItems {
  @Column('int', {
    name: 'container_id',
    comment: 'guid of container (item_instance.guid)',
    unsigned: true,
    default: () => '0',
  })
  containerId!: number

  @Column('int', {
    name: 'item_id',
    comment: 'loot item entry (item_instance.itemEntry)',
    unsigned: true,
    default: () => '0',
  })
  itemId!: number

  @Column('int', {
    name: 'item_count',
    comment: 'stack size',
    default: () => '0',
  })
  itemCount!: number

  @Column('tinyint', {
    name: 'follow_rules',
    comment: 'follow loot rules',
    width: 1,
    default: () => '0',
  })
  followRules!: boolean

  @Column('tinyint', {
    name: 'ffa',
    comment: 'free-for-all',
    width: 1,
    default: () => '0',
  })
  ffa!: boolean

  @Column('tinyint', { name: 'blocked', width: 1, default: () => '0' })
  blocked!: boolean

  @Column('tinyint', { name: 'counted', width: 1, default: () => '0' })
  counted!: boolean

  @Column('tinyint', {
    name: 'under_threshold',
    width: 1,
    default: () => '0',
  })
  underThreshold!: boolean

  @Column('tinyint', {
    name: 'needs_quest',
    comment: 'quest drop',
    width: 1,
    default: () => '0',
  })
  needsQuest!: boolean

  @Column('tinyint', {
    name: 'rnd_type',
    comment: 'random enchantment type',
    unsigned: true,
    default: () => '0',
  })
  rndType!: number

  @Column('int', {
    name: 'rnd_prop',
    comment: 'random enchantment added when originally rolled',
    unsigned: true,
    default: () => '0',
  })
  rndProp!: number

  @Column('int', {
    name: 'rnd_suffix',
    comment: 'random suffix added when originally rolled',
    default: () => '0',
  })
  rndSuffix!: number
}
