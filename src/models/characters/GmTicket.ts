import { GM_TICKET, STORE_CHARACTERS } from '#constants'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity(GM_TICKET, { schema: STORE_CHARACTERS })
export class GmTicket {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id!: number

  @Column('tinyint', {
    name: 'type',
    comment: '0 open, 1 closed, 2 character deleted',
    unsigned: true,
    default: () => '0',
  })
  type!: number

  @Column('int', {
    name: 'playerGuid',
    comment: 'Global Unique Identifier of ticket creator',
    unsigned: true,
    default: () => '0',
  })
  playerGuid!: number

  @Column('varchar', {
    name: 'name',
    comment: 'Name of ticket creator',
    length: 12,
  })
  name!: string

  @Column('text', { name: 'description' })
  description!: string

  @Column('int', { name: 'createTime', unsigned: true, default: () => '0' })
  createTime!: number

  @Column('smallint', { name: 'mapId', unsigned: true, default: () => '0' })
  mapId!: number

  @Column('float', { name: 'posX', precision: 12, default: () => '0' })
  posX!: number

  @Column('float', { name: 'posY', precision: 12, default: () => '0' })
  posY!: number

  @Column('float', { name: 'posZ', precision: 12, default: () => '0' })
  posZ!: number

  @Column('int', {
    name: 'lastModifiedTime',
    unsigned: true,
    default: () => '0',
  })
  lastModifiedTime!: number

  @Column('int', { name: 'closedBy', default: () => '0' })
  closedBy!: number

  @Column('int', {
    name: 'assignedTo',
    comment: 'GUID of admin to whom ticket is assigned',
    unsigned: true,
    default: () => '0',
  })
  assignedTo!: number

  @Column('text', { name: 'comment' })
  comment!: string

  @Column('text', { name: 'response' })
  response!: string

  @Column('tinyint', {
    name: 'completed',
    unsigned: true,
    default: () => '0',
  })
  completed!: number

  @Column('tinyint', {
    name: 'escalated',
    unsigned: true,
    default: () => '0',
  })
  escalated!: number

  @Column('tinyint', { name: 'viewed', unsigned: true, default: () => '0' })
  viewed!: number

  @Column('tinyint', {
    name: 'needMoreHelp',
    unsigned: true,
    default: () => '0',
  })
  needMoreHelp!: number

  @Column('int', {
    name: 'resolvedBy',
    comment: 'GUID of GM who resolved the ticket',
    default: () => '0',
  })
  resolvedBy!: number
}
