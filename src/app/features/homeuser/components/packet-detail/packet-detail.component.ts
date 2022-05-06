import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacketService } from 'src/app/core/services/packet.service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Packet } from 'src/app/shared/model/packet-model';
import { Reservation } from 'src/app/shared/model/reservation-model';

@Component({
  selector: 'fin-packet-detail',
  templateUrl: './packet-detail.component.html',
  styleUrls: ['./packet-detail.component.css']
})
export class PacketDetailComponent implements OnInit {

  startDate: string = ""
  endDate: string = ""
  nPeople: number = 1

  invalidDates: boolean = false

  constructor(private route: ActivatedRoute,
    private packetService: PacketService,
    private reservationService: ReservationService,
    private router: Router) {

  }
  currentPacket: Packet = {} as Packet
  currentUserId: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe(
      p => {
        //Questo id è il nome di variable assegnato nei path in product-routing
        this.currentPacket.id = p['packet_id']
        this.currentUserId = p['user_id']
        this.packetService.getPacketById(this.currentPacket.id).subscribe(
          result => {
            this.currentPacket = result
          },
          error => {
            console.log(error)
          }
        )

      }
    )
  }

  private formatDateString(oldDate: string) {
    let anno, giorno, mese: string = ""
    let oldDateArray = oldDate.split('-')
    anno = oldDateArray[0]
    mese = oldDateArray[1]
    giorno = oldDateArray[2]
    return giorno + '-' + mese + '-' + anno

  }

  createReservation(reservationForm: NgForm) {
    if (reservationForm.value.dataInizio === "" || reservationForm.value.dataFine === "") {
      console.log("NO!")
      this.invalidDates = true
      return
    }



    const newReservation: Reservation = {
      id: 0,
      id_user: this.currentUserId,
      id_packet: this.currentPacket.id,
      start_date: this.formatDateString(reservationForm.value.dataInizio),
      end_date: this.formatDateString(reservationForm.value.dataFine),
      nr_people: reservationForm.value.numeroPersone
    }
    this.reservationService.createReservation(newReservation).subscribe(
      result => {
        console.log(result)
        this.router.navigateByUrl("homeuser/" + this.currentUserId)
      },
      error => {
        console.log(error)
      }
    )

  }

}
