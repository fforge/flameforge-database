import { CHARACTER_CURRENCY, STORE_CHARACTERS } from '#constants'
import { Column, Entity } from 'typeorm'

@Entity(CHARACTER_CURRENCY, { schema: STORE_CHARACTERS })
export class CharacterCurrency {
  @Column('int', { primary: true, name: 'CharacterGuid', unsigned: true })
  characterGuid!: number

  @Column('smallint', { primary: true, name: 'Currency', unsigned: true })
  currency!: number

  @Column('int', { name: 'Quantity', unsigned: true })
  quantity!: number

  @Column('int', { name: 'WeeklyQuantity', unsigned: true })
  weeklyQuantity!: number

  @Column('int', { name: 'TrackedQuantity', unsigned: true })
  trackedQuantity!: number

  @Column('tinyint', { name: 'Flags', unsigned: true })
  flags!: number
}
