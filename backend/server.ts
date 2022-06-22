import express, { Request, Response } from "express";
import bodyParser from "body-Parser"
import cors from "cors"
import typeorm, { getManager } from "typeorm"
import "reflect-metadata"
import { AppDataSource } from "./data-source"
import { Listado } from "./entity/listado";
import { request } from "http";



const manager = AppDataSource.manager
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cors())

app.get('/listado', async function(req: Request, res: Response) {
  const listado = await manager.find(Listado)
    res.send(listado)
  });

app.post('/insertar', async function(req: Request, res: Response) {
    const listadoInstancia = new Listado()
    listadoInstancia.dato = req.body.tarea
    await manager.save(listadoInstancia)
  res.sendStatus(200)
  });

app.delete('/listado/:id', async function(req: Request, res: Response) {
await manager.delete(Listado, {id: req.params.id})
 
  res.sendStatus(200)
  });


const PORT = 2003


AppDataSource.initialize()
    .then(() => {
      app.listen(PORT, () => {
        console.log('Servidor', PORT)
    })
    })
    .catch((error:Error) => console.log(error))