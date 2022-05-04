import { VehicleEnum } from "../../@template/enum/VehicleEnum"

export interface Packet {
    id: number,
    nomePacchetto: string,
    mezzoTrasporto: VehicleEnum,
    city: string,
    costo: number
}