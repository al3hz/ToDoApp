import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Listado {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    dato: string
}