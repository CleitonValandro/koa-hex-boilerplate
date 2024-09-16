import { BaseModel } from "../../domain/models/baseModel"

export class BaseResource {
    get(data: BaseModel[]) {
        return data.map(item => this.getOne(item))
    }

    getOne(data: BaseModel) {}
}
