import { Injectable } from '@angular/core';
import { Bored } from '../interfaces/activity';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  endpoint: string = 'https://bored-api.appbrewery.com';

  actividadGenerada: Bored = {
    activity: '',
    availability: 0,
    type: 'education',
    participants: 1,
    price: 0,
    accessibility: '',
    duration: '',
    kidFriendly: false,
    link: '',
    key: '',
  };
  constructor(private http: HttpClient) {
    const params = new HttpParams()
      .set('type', this.actividadGenerada.type)
      .set('participants', this.actividadGenerada.participants)
      .set('price', this.actividadGenerada.price);
    this.http
      .get<Bored>(`${this.endpoint}/random?`, { params })
      .subscribe((resp) => {
        console.log(resp.price);
      });
  }
  peticion() {}
}
