import { DataSource } from "typeorm"
import { UserModel } from "../../domain/models/userModel"
import 'dotenv/config'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [UserModel],
    synchronize: true,
    logging: false,
})