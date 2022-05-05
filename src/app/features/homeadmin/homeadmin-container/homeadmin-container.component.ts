import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { enumNavbar } from 'src/app/@template/navbar/enum-navbar';

@Component({
  selector: 'fin-homeadmin-container',
  templateUrl: './homeadmin-container.component.html',
  styleUrls: ['./homeadmin-container.component.css']
})
export class HomeadminContainerComponent implements OnInit {

  constructor(private router: Router ){}

  menuSelectionHandler(manageMenu:enumNavbar ): void {
    if (manageMenu === enumNavbar.LISTAPRENOTAZIONI) {
      this.router.navigateByUrl('');
    } else if (manageMenu === enumNavbar.CREAZIONEPACCHETTO) {
      this.router.navigateByUrl('people');
    }
  }

 
  ngOnInit(): void {
  }

}
