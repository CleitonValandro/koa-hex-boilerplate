
import { UserModel } from "../../domain/models/userModel"
import { BaseResource } from "./baseResource"

export class UserResource extends BaseResource {
    getOne(user: UserModel) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    }
}
