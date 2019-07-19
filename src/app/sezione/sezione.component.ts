import { Component, OnInit, Input } from '@angular/core';
import { Nastro } from '../nastro/nastro';

@Component({
  selector: 'app-sezione',
  templateUrl: './sezione.component.html',
  styleUrls: ['./sezione.component.css']
})
export class SezioneComponent implements OnInit {
  @Input() nastri : Array<Nastro> = [];


  gaugeType = "semi";
  gaugeLabel = "Velocita";
  gaugeAppendText = "metri/m";

  gaugeType2 = "semi";
  gaugeLabel2 = "Consumo";
  gaugeAppendText2 = "watt/hr";

  constructor() { }

  ngOnInit() { }

}
