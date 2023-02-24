import { DeepPartial, EntityManager, EntityTarget, ObjectLiteral, Repository } from 'typeorm'
import { Request } from '#types'
import Debug from 'debug'

const debug = Debug('flameforge-database:core')

export interface StorageCoreOptions<T> {
  manager: EntityManager
  model: T
  store: Repository<ObjectLiteral>
}

export default class Core<T> extends Repository<ObjectLiteral>{
  readonly manager: EntityManager
  readonly model: EntityTarget<ObjectLiteral>
  readonly store: Repository<ObjectLiteral>

  constructor ({
    manager,
    model,
    store,
  }: StorageCoreOptions<EntityTarget<ObjectLiteral>>) {
    super(model, manager)
    this.manager = manager
    this.model = model
    this.store = store
  }

  public async get (request: Request): Promise<ObjectLiteral[]> {
    debug('GET [ %s ] request=%o', this.model, request)
    return this.store.find()
  }

  public async read (request: Request): Promise<ObjectLiteral | null | undefined> {
    const filters = request?.query?.filters
    if (!filters) return undefined
    debug('READ [ %s ] REQUEST=%o FILTERS=%o FILTERS=%o', this.model, request, filters)
    return this.store.findBy(filters)
  }

  public async post (request: Request): Promise<DeepPartial<ObjectLiteral>> {
    debug('POST [ %s ] request=%o', this.model, request)
    return this.store.save(request.payload)
  }

  public async put (request: Request): Promise<DeepPartial<ObjectLiteral>> {
    debug('PUT [ %s ] request=%o', this.model, request)
    return this.store.save(request.payload)
  }

  public async deleteOne (request: Request): Promise<ObjectLiteral> {
    debug('DELETE [ %s ] request=%o', this.model, request)
    return this.store.remove({ id: request.payload.id })
  }
}
