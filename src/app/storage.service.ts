import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async getSezioni() {
    return await fetch(environment.apiUrl + '/sezioni', {
      method: "GET",
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json());
  }

  async getNastri() {
    return await fetch(environment.apiUrl + '/nastri', {
      method: "GET",
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json());
  }

  async getData() {
    return await fetch(environment.apiUrl + '/data', {
      method: "GET",
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json());
  }

}
