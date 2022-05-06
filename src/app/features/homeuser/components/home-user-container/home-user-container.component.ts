import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacketService } from 'src/app/core/services/packet.service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Packet } from 'src/app/shared/model/packet-model';
import { Reservation } from 'src/app/shared/model/reservation-model';


@Component({
  selector: 'fin-home-user-container',
  templateUrl: './home-user-container.component.html',
  styleUrls: ['./home-user-container.component.css']
})
export class HomeUserContainerComponent implements OnInit {

  availablePacketsList: Packet[] = []
  reservedPacketsList: Packet[] = []
  reservationsList:Reservation[]=[]
  currentUserId: number = 0

  constructor(
    private packetService: PacketService,
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private router:Router
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
        this.currentUserId = p['user_id']
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
          this.reservationsList.push(reservation)
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
    this.router.navigateByUrl('homeuser/'+this.currentUserId+'/'+packet_id)
  }

  deleteHandler(packet_id: number) {
    console.log("Hai eliminato il pacchetto: " + packet_id)
    for (let index = 0; index < this.reservationsList.length; index++) {
      const currentReservation = this.reservationsList[index];
      if(currentReservation.id_packet===packet_id){
        this.reservationService.deleteReservationById(currentReservation.id).subscribe(
          result=>{
              console.log(result)
             
              this.reservedPacketsList=this.reservedPacketsList.filter(el => el.id !==packet_id);
          },
          error=>{
            console.log(error)
          }
        )
      }
      
    }
  }

}
