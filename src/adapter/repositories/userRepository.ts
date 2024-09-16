import { BaseRepository } from "./baseRepository"
import { UserModel } from "../../domain/models/userModel"

export class UserRepository extends BaseRepository<UserModel> {
    constructor() {
        super(UserModel)
    }
}
