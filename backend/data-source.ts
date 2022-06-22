import { DataSource } from "typeorm";
import { Listado } from "./entity/listado";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "toDoApp",
    synchronize: false,
    logging: true,
    entities: [Listado],
    subscribers: [],
    migrations: [],
})