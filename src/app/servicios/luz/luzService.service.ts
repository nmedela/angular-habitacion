import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../config';
import  Luz  from '../../domain/Luz';
@Injectable({
  providedIn: 'root'
})
export class LuzServiceService {

constructor(private http: HttpClient) { }
async ejecutarLuz(luz: Luz) {
  return await this.http.post(`${API_URL}/luces`, luz.toJSON()).toPromise()
}
}
