import { BaseRepository } from "./baseRepository"
import { BaseModel } from "./baseModel"
import { BaseEntity } from "./baseEntity"

export class BaseService<T extends BaseModel, E extends BaseEntity> {
    private repository: BaseRepository<T>

    constructor(model: { new (): T }, private entityClass: { new (data: any): E }) {
        this.repository = new BaseRepository(model)
    }

    async set(data: any): Promise<T> {
        const entity = new this.entityClass(data)
        return await this.repository.save(entity as unknown as T)
    }

    async get(): Promise<T[]> {
        return await this.repository.find()
    }

    async getOne(id: number): Promise<T | null> {
        return await this.repository.findById(id)
    }
}
