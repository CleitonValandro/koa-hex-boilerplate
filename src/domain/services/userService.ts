import { BaseService } from "./baseService"
import { UserModel } from "../models/userModel"
import { UserEntity } from "../entities/userEntity"

export class UserService extends BaseService<UserModel, UserEntity> {
    constructor() {
        super(UserModel, UserEntity)
    }
}
