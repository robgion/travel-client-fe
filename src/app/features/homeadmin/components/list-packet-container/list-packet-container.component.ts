import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Packet } from 'src/app/shared/model/packet-model';
import { PacketService } from 'src/app/core/services/packet.service';


@Component({
  selector: 'fin-list-packet-container',
  templateUrl: './list-packet-container.component.html',
  styleUrls: ['./list-packet-container.component.css']
})


export class ListPacketContainerComponent implements OnInit {

    //Variabile di controllo field del form
    isNotValid: boolean = false

    //Parametri per i pacchetti
    PacketsList: Packet[] = []
    listPacketsHeaders: string[] =
      ["ID", "Nome Pacchetto", "Mezzo Trasporto", "Città", "Costo", "Opzioni"]
    listPacketKeys: string[] =
      ["id", "nomePacchetto", "mezzoTrasporto", "city", "costo"]

      insertedId: string = "";
      insertedName: string = "";
      insertedVehicle: number = 1;
      insertedCity: string = "";
      insertedCost: number = 0;
      
  constructor(
    private router: Router,
    private packetService: PacketService,
  ) {
        //Recupero pacchetti disponibili
        this.packetService.getAllPackets().subscribe(
          result => {
            this.PacketsList = result
          },
          error => {
            console.log(error)
          }
        )
   }

  
  packetCreation(packetForm: NgForm) {

    if (packetForm.value.campoVeicolo > 4 || 
      packetForm.value.campoNome === "" ||
      packetForm.value.campoCity === "" ||
      packetForm.value.campoCosto === "") {
        this.isNotValid = true
        console.log("Error")
        return
    }

    
    const packetToSave: Packet = {
      id: 0,
      nomePacchetto: packetForm.value.campoNome,
      mezzoTrasporto: packetForm.value.campoVeicolo,
      city: packetForm.value.campoCity,
      costo: packetForm.value.campoCosto,
    }   
    alert("Pacchetto registrato!")
    
    this.packetService.createPacket(packetToSave).subscribe(
      result => {
        console.log(result)
        console.log("PACCHETTO REGISTRATO!")
        this.PacketsList.push(packetToSave)
      },
      error => {
        console.log(error)
      }
    )
  }

  cancellaPacchetto(packet_id: number) {
    this.packetService.deletePacketById(packet_id).subscribe(
      result => {
        this.PacketsList = this.PacketsList.filter(el => el.id !== packet_id)
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }
}
