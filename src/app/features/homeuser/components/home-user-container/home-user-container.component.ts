import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacketService } from 'src/app/core/services/packet.service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Packet } from 'src/app/shared/model/packet-model';

@Component({
  selector: 'fin-home-user-container',
  templateUrl: './home-user-container.component.html',
  styleUrls: ['./home-user-container.component.css']
})
export class HomeUserContainerComponent implements OnInit {

  availablePacketsList: Packet[] = []
  reservedPacketsList: Packet[] = []

  currentUserId: number = 0

  constructor(
    private packetService: PacketService,
    private reservationService: ReservationService,
    private route: ActivatedRoute,
  ) {

    //Recupero pacchetti disponibili
    this.packetService.getAllPackets().subscribe(
      result => {
        this.availablePacketsList = result
      },
      error => {
        console.log(error)
      }
    )

    //Recupero pacchetti associati all'utente


  }

  ngOnInit(): void {
    this.route.params.subscribe(
      p => {
        //Questo id è il nome di variable assegnato nei path in product-routing
        this.currentUserId = p['id']
        this.loadReservedPackets()
      }
    )
  }

  private loadReservedPackets() {
    console.log("Mi sono loggato! Sono " + this.currentUserId)

    this.reservationService.getAllReservationsByUserId(this.currentUserId).subscribe(
      result => {
        for (let index = 0; index < result.length; index++) {
          const reservation = result[index];
          this.packetService.getPacketById(reservation.id_packet).subscribe(
            result => {
              this.reservedPacketsList.push(result)
            },
            error => {
              console.log(error)
            }
          )
        }
      },
      error => {
        console.log(error)
      }
    ) 
  }

  selectHandler(packet_id: number) {
    console.log("Hai selezionato il pacchetto: " + packet_id)
  }

  deleteHandler(packet_id: number) {
    console.log("Hai eliminato il pacchetto: " + packet_id)
  }

}
