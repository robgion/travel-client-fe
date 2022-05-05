import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { VehicleEnum } from '../../enum/vehicle-enum';
import { Packet } from '../../model/packet-model';

@Component({
  selector: 'fin-list-packets',
  templateUrl: './list-packets.component.html',
  styleUrls: ['./list-packets.component.css']
})
export class ListPacketsComponent implements OnInit {

  @Input()
  option: string = ""

  @Input()
  title: string = ""

  @Output()
  selectEvent: EventEmitter<number> = new EventEmitter()

  @Output()
  deleteEvent: EventEmitter<number> = new EventEmitter()

  @Input()
  listPackets: Packet[] = []

  constructor() { }

  optionHandler(packet_id: number) {
    if (this.option === "Seleziona") this.selectEvent.emit(packet_id)
    if (this.option === "Elimina") this.deleteEvent.emit(packet_id)
  }
  
  ngOnInit(): void {
  }

}
