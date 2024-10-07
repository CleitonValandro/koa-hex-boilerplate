import { UserService } from "../../domain/services/userService"
import { UserResource } from "../resources/userResource"
import { BaseController } from "../../../../../common/base/baseController"

export class UserController extends BaseController<any> {
    constructor() {
        super(new UserService(), new UserResource())
    }
}