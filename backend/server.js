"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_Parser_1 = __importDefault(require("body-Parser"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const data_source_1 = require("./data-source");
const listado_1 = require("./entity/listado");
const manager = data_source_1.AppDataSource.manager;
const app = (0, express_1.default)();
app.use(body_Parser_1.default.urlencoded({ extended: true }));
app.use(body_Parser_1.default.json());
app.use((0, cors_1.default)());
app.get('/listado', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const listado = yield manager.find(listado_1.Listado);
        res.send(listado);
    });
});
app.post('/insertar', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const listadoInstancia = new listado_1.Listado();
        listadoInstancia.dato = req.body.tarea;
        yield manager.save(listadoInstancia);
        res.sendStatus(200);
    });
});
app.delete('/listado/:id', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield manager.delete(listado_1.Listado, { id: req.params.id });
        res.sendStatus(200);
    });
});
const PORT = 2003;
data_source_1.AppDataSource.initialize()
    .then(() => {
    app.listen(PORT, () => {
        console.log('Servidor', PORT);
    });
})
    .catch((error) => console.log(error));
