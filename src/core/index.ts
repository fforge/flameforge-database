import { DeepPartial, ObjectLiteral, Repository } from 'typeorm'
import { Request } from '#types'
import Debug from 'debug'

const debug = Debug('flameforge-database:core')

export interface StorageCoreOptions<T> {
  model: T
  store: Repository<ObjectLiteral>
}

export default class Core<T> {
  readonly model: T
  readonly store: Repository<ObjectLiteral>

  constructor ({
    model,
    store,
  }: StorageCoreOptions<T>) {
    this.model = model
    this.store = store
  }

  public async get (request: Request): Promise<ObjectLiteral[]> {
    const filters = request?.query?.filters || {}
    const skip = request?.query?.options?.skip || 0
    const limit = request?.query?.options?.limit || 25
    const fields = request?.query?.populate?.fields || ''
    const sort = request?.query?.options?.sort || { _id: -1 }
    debug('GET [ %s ] request=%o', this.model, { fields, filters, skip, limit, sort })
    return this.store.find(filters)
  }

  public async read (request: Request): Promise<ObjectLiteral | null | undefined> {
    const filters = request?.query?.filters
    const fields = request?.query?.populate?.fields || ''
    if (!filters) return undefined
    debug('READ [ %s ] REQUEST=%o FILTERS=%o FILTERS=%o', this.model, request, filters, fields)
    return this.store.findOne(filters)
  }

  public async post (request: Request): Promise<DeepPartial<ObjectLiteral>> {
    debug('POST [ %s ] request=%o', this.model, request)
    return this.store.save(request.payload)
  }

  public async put (request: Request): Promise<DeepPartial<ObjectLiteral>> {
    debug('PUT [ %s ] request=%o', this.model, request)
    return this.store.save(request.payload)
  }

  public async delete (request: Request): Promise<ObjectLiteral> {
    debug('DELETE [ %s ] request=%o', this.model, request)
    return this.store.remove({ id: request.payload.id })
  }
}
