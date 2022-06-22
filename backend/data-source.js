"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const listado_1 = require("./entity/listado");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "toDoApp",
    synchronize: false,
    logging: true,
    entities: [listado_1.Listado],
    subscribers: [],
    migrations: [],
});
