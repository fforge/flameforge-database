import { GM_SUBSURVEY, STORE_CHARACTERS } from '#constants'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity(GM_SUBSURVEY, { schema: STORE_CHARACTERS })
export class GmSubsurvey {
  @PrimaryGeneratedColumn({ type: 'int', name: 'surveyId', unsigned: true })
  surveyId!: number

  @Column('int', {
    primary: true,
    name: 'questionId',
    unsigned: true,
    default: () => '0',
  })
  questionId!: number

  @Column('int', { name: 'answer', unsigned: true, default: () => '0' })
  answer!: number

  @Column('text', { name: 'answerComment' })
  answerComment!: string
}
