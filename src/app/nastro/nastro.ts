import * as moment from 'moment';
import { Moment } from 'moment';
import { Interfaces } from 'src/interfaces/interfaces';

export class Nastro  {
  data : Interfaces.Nastro = {id : null, codice: null, id_sezione: null};
  consumo: number = 0;
  velocita: number = 0;
  time: Moment = null;

  constructor(data) {
    this.data = data;
  }

  ngOnInit() {}

  gettime() {
    return moment(this.time).format("HH:mm:ss");
  }


}
