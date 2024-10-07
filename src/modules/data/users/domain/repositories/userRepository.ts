import { BaseRepository } from "../../../../../common/base/baseRepository"
import { UserModel } from "../models/userModel"

export class UserRepository extends BaseRepository<UserModel> {
    constructor() {
        super(UserModel)
    }
}
