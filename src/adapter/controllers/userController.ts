import { UserService } from "../../domain/services/userService"
import { UserResource } from "../../application/resources/userResource"
import { BaseController } from "./baseController"

export class UserController extends BaseController<any> {
    constructor() {
        super(new UserService(), new UserResource())
    }
}