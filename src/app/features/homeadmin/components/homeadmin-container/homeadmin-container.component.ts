import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacketService } from 'src/app/core/services/packet.service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { enumNavbar } from 'src/app/@template/navbar/enum-navbar';
import { Packet } from 'src/app/shared/model/packet-model';
import { NgForm } from '@angular/forms';
import { Reservation } from 'src/app/shared/model/reservation-model';
import { VehicleEnum } from 'src/app/shared/enum/vehicle-enum';



@Component({
  selector: 'fin-homeadmin-container',
  templateUrl: './homeadmin-container.component.html',
  styleUrls: ['./homeadmin-container.component.css']
})
export class HomeadminContainerComponent implements OnInit {

  //Variabile di controllo field del form
  isNotValid: boolean = false

  //Parametri per i pacchetti
  PacketsList: Packet[] = []
  listPacketsHeaders: string[] =
    ["ID", "Nome Pacchetto", "Mezzo Trasporto", "Città", "Costo", "Opzioni"]
  listPacketKeys: string[] =
    ["id", "nomePacchetto", "mezzoTrasporto", "city", "costo"]

  //Parametri per le prenotazioni
  ReservationsList: Reservation[] = []
  reservationsListHeaders: string[] =
    ["ID", "ID Utente", "ID Pacchetto", "Data Partenza", "Data Ritorno", "Numero Partecipanti", "Opzioni"]
  reservationsKeys: string[] =
    ["id", "id_user", "id_packet", "start_date", "end_date", "nr_people"]

  insertedId: string = "";
  insertedName: string = "";
  insertedVehicle: number = 1;
  insertedCity: string = "";
  insertedCost: number = 0;

  showCreazionePacchetto: boolean;
  showListaPrenotazioni: boolean;
  showListaPacchettiOfferti: boolean;

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

    this.showListaPrenotazioni = false;
    this.showCreazionePacchetto = false;
    this.showListaPacchettiOfferti = false;

  }



  menuSelectionHandler(manageMenu: enumNavbar): void {
    if (manageMenu === enumNavbar.LISTAPRENOTAZIONI) {
      this.showListaPrenotazioni = true;
      this.showCreazionePacchetto = false;
      this.showListaPacchettiOfferti = false;
    } else if (manageMenu === enumNavbar.CREAZIONEPACCHETTO) {
      this.showCreazionePacchetto = true;
      this.showListaPrenotazioni = false;
      this.showListaPacchettiOfferti = false
    } else if (manageMenu === enumNavbar.LISTAPACCHETTI) {
      this.showCreazionePacchetto = false;
      this.showListaPrenotazioni = false;
      this.showListaPacchettiOfferti = true;;
    }
  }



  packetCreation(packetForm: NgForm) {

    if (packetForm.value.campoVeicolo > 4 || 
      packetForm.value.campoNome === "" ||
      packetForm.value.campoCity === "" ||
      packetForm.value.campoCosto === "") {
        this.isNotValid = true
        console.log(packetForm.value)
        return
    }

    alert("Pacchetto registrato!")

    const packetToSave: Packet = {
      id: 0,
      nomePacchetto: packetForm.value.campoNome,
      mezzoTrasporto: packetForm.value.campoVeicolo,
      city: packetForm.value.campoCity,
      costo: packetForm.value.campoCosto,


    }
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

  cancellaPrenotazione(reservation_id: number) {
    this.reservationService.deleteReservationById(reservation_id).subscribe(
      result => {
        this.ReservationsList = this.ReservationsList.filter(el => el.id !== reservation_id)
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
