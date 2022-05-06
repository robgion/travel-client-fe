import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/shared/model/reservation-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllReservationsByUserId(user_id: number) {
    const url = environment.baseUrl + '/reservations?id_user=' + user_id
    return this.http.get<Reservation[]>(url);
  }

  public getAllReservations(): Observable<Reservation[]> {
    const url = environment.baseUrl + '/reservations'
    return this.http.get<Reservation[]>(url);
  }
}
