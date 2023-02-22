import { BANNED_ADDONS, STORE_CHARACTERS } from '#constants'
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('idx_name_ver', ['name', 'version'], { unique: true })
@Entity(BANNED_ADDONS, { schema: STORE_CHARACTERS })
export class BannedAddons {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id', unsigned: true })
  id!: number

  @Column('varchar', { name: 'Name', length: 255 })
  name!: string

  @Column('varchar', { name: 'Version', length: 255, default: () => '' })
  version!: string

  @Column('timestamp', {
    name: 'Timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  timestamp!: Date
}
