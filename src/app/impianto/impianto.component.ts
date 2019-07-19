import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import * as io from 'socket.io-client';
import { Interfaces } from 'src/interfaces/interfaces';
import { Nastro } from '../nastro/nastro';

@Component({
  selector: 'app-impianto',
  templateUrl: './impianto.component.html',
  styleUrls: ['./impianto.component.css']
})
export class ImpiantoComponent implements OnInit {
  socket: SocketIOClient.Socket;
  sezioni: Array<Interfaces.Sezione> = [];
  nastri: Array<Nastro> = [];

  constructor(private storage: StorageService) {
    this.socket = io.connect('http://127.0.0.1:1883');
  }

  ngOnInit() {
    this.loadSezioni();
    this.loadNastri();
    this.reciveNewData();
  }

  loadSezioni() {
    this.storage.getSezioni().then(res => {
      this.sezioni = res;
    });
  }

  loadNastri() {
    this.storage.getNastri().then(res => {
      res.forEach(n => {
        this.nastri.push(new Nastro(n));
      });
      this.loadLastData();
    });
  }

  loadLastData() {
    this.storage.getData().then(res => {
      res.forEach(r => {
        this.setData(r);
      });
    });
  }


  reciveNewData() {
    this.socket.on('data', (data) => {
      this.setData(data);
    });
  }


  sendNastri(sezione) {
    let array = [];
    this.nastri.forEach(n => {
      if (n.data.id_sezione == sezione.id) array.push(n);
    });
    return array;
  }

  setData(data){
    let target = this.nastri.findIndex(n => n.data.id == data.id_nastro);
    this.nastri[target].time = data.time;
    if (data.consumo) this.nastri[target].consumo = data.consumo;
    if (data.velocita) this.nastri[target].velocita = data.velocita;
  }
}
