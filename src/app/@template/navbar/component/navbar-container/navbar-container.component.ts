import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { enumNavbar } from '../../enum-navbar';

@Component({
  selector: 'fin-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.css']
})
export class NavbarContainerComponent implements OnInit {

@Output() menuSelection: EventEmitter<enumNavbar> = new EventEmitter<enumNavbar>(); 

  constructor() { }

  ngOnInit(): void {
  }

  manageMenu(index : number) : void{
    this.menuSelection.emit(index);
  }
}
