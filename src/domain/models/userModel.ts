import { Entity, Column } from "typeorm"
import { BaseModel } from "./baseModel"

@Entity('users')
export class UserModel extends BaseModel {
    @Column()
    name?: string

    @Column()
    email?: string
}
