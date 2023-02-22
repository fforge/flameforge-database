import { BUGREPORT, STORE_CHARACTERS } from '#constants'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity(BUGREPORT, { schema: STORE_CHARACTERS })
export class Bugreport {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: 'Identifier',
    unsigned: true,
  })
  id!: number

  @Column('longtext', { name: 'type' })
  type!: string

  @Column('longtext', { name: 'content' })
  content!: string
}
