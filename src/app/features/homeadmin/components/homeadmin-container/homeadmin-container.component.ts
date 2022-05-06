import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacketService } from 'src/app/core/services/packet.service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { enumNavbar } from 'src/app/@template/navbar/enum-navbar';
import { Packet } from 'src/app/shared/model/packet-model';
import { NgForm } from '@angular/forms';
import { Reservation } from 'src/app/shared/model/reservation-model';



@Component({
  selector: 'fin-homeadmin-container',
  templateUrl: './homeadmin-container.component.html',
  styleUrls: ['./homeadmin-container.component.css']
})
export class HomeadminContainerComponent implements OnInit {

  PacketsList: Packet[] = []
  ReservationsList: Reservation[] = []
  insertedId: string = "";
  insertedName: string = "";
  insertedVehicle: number = 0;
  insertedCity: string = "";
  insertedCost: number = 0;

  showCreazionePacchetto:boolean;
  showListaPrenotazioni:boolean;
  showListaPacchettiOfferti:boolean;

  constructor(
    private router: Router,
    private packetService: PacketService,
    private reservationService: ReservationService
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

    //Recupero prenotazioni disponibili
    this.reservationService.getAllReservations().subscribe(
      result => {
        this.ReservationsList = result
      },
      error => {
        console.log(error)
      }
    )

    this.showListaPrenotazioni=false;
    this.showCreazionePacchetto=false;
    this.showListaPacchettiOfferti=false;

  }



  menuSelectionHandler(manageMenu: enumNavbar): void {
    if (manageMenu === enumNavbar.LISTAPRENOTAZIONI) {
      this.showListaPrenotazioni=true;
      this.showCreazionePacchetto=false;
      this.showListaPacchettiOfferti=false;
    } else if (manageMenu === enumNavbar.CREAZIONEPACCHETTO) {
      this.showCreazionePacchetto=true;
      this.showListaPrenotazioni=false;
      this.showListaPacchettiOfferti=false
    }else if (manageMenu === enumNavbar.LISTAPACCHETTI) {
      this.showCreazionePacchetto=false;
      this.showListaPrenotazioni=false;
      this.showListaPacchettiOfferti=true;;
    }
  }



  packetCreation(packetForm: NgForm) {

    
    this.packetService.getAllPackets().subscribe(
      result => {
        const packetToSave: Packet = {
          id: 0,
          nomePacchetto: packetForm.value.campoNome,
          mezzoTrasporto: packetForm.value.campoVeicolo,
          city: packetForm.value.campoCity,
          costo: packetForm.value.campoCosto,
          

        }
        console.log(packetToSave)
        this.packetService.createPacket(packetToSave).subscribe(
          result => {
            console.log(result)
            console.log("PACCHETTO REGISTRATO!")
          },
          error => {
            console.log(error)
          }
        )

      },
      error => {
        console.log(error)
      }
    )

  }

  ngOnInit(): void {
  }

}
