import { UserInterface } from "../interfaces/userInterface"
import { BaseEntity } from "../../../../../common/base/baseEntity"

export class UserEntity extends BaseEntity {
    name: string
    email: string

    constructor(user: UserInterface) {
        super(user)
        this.name = user.name
        this.email = user.email
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    setName(name: string) {
        this.name = name
    }
}
