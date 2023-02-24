import { LOGS_IP_ACTIONS } from '#constants/auth'
import { LogsIpActions } from '#models/auth/LogsIpActions'
import { DataSource } from 'typeorm'
import Core from '#core'

export class LogsIpActionsStore extends Core<LogsIpActions> {
  constructor (data_source: DataSource) {
    super({
      manager: data_source.manager,
      model:  LogsIpActions,
      store: data_source.getRepository(LOGS_IP_ACTIONS),
    })
  }
}