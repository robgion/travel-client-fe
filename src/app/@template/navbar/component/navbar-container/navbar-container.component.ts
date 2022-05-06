import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'fin-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.css']
})
export class NavbarContainerComponent implements OnInit {

 

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  @Input()

  listTabs: string[] = [];

  goToSignIn() {
    this.router.navigateByUrl("login/signin")
  }



 
}

