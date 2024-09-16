import { Repository, EntityTarget } from "typeorm"
import { AppDataSource } from "../../infrastructure/database/database"

export class BaseRepository<T> {
    private repository: Repository<any>

    constructor(entity: EntityTarget<T>) {
        this.repository = AppDataSource.getRepository(entity as any)
    }

    async save(entity: T): Promise<T> {
        return await this.repository.save(entity)
    }

    async find(): Promise<T[]> {
        return await this.repository.find()
    }

    async findById(id: number): Promise<T> {
        return await this.repository.findOneBy({ id } as any)
    }
}
