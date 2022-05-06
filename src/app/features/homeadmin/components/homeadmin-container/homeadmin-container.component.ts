import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'fin-homeadmin-container',
  templateUrl: './homeadmin-container.component.html',
  styleUrls: ['./homeadmin-container.component.css']
})


export class HomeadminContainerComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  switchAdminView(indice_menu: number) {
    if(indice_menu === 0) this.router.navigateByUrl("homeadmin/lista-prenotazioni")
    else this.router.navigateByUrl("homeadmin/lista-pacchetti")
  }



}
