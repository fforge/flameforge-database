import { GM_SURVEY, STORE_CHARACTERS } from '#constants'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity(GM_SURVEY, { schema: STORE_CHARACTERS })
export class GmSurvey {
  @PrimaryGeneratedColumn({ type: 'int', name: 'surveyId', unsigned: true })
  surveyId!: number

  @Column('int', { name: 'guid', unsigned: true, default: () => '0' })
  guid!: number

  @Column('int', { name: 'mainSurvey', unsigned: true, default: () => '0' })
  mainSurvey!: number

  @Column('longtext', { name: 'comment' })
  comment!: string

  @Column('int', { name: 'createTime', unsigned: true, default: () => '0' })
  createTime!: number
}
