import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { enumNavbar } from '../../enum-navbar';
import { Router } from "@angular/router";

@Component({
  selector: 'fin-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.css']
})
export class NavbarContainerComponent implements OnInit {

@Output() menuSelection: EventEmitter<enumNavbar> = new EventEmitter<enumNavbar>(); 

  constructor( private router: Router,) { }

  ngOnInit(): void {
  }

  goToSignIn() {
    this.router.navigateByUrl("login/signin")
  }


  manageMenu(index : number) : void{
    this.menuSelection.emit(index);
  }
}
