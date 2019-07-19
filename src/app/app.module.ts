import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGaugeModule } from 'ngx-gauge';

import { AppComponent } from './app.component';
import { ImpiantoComponent } from './impianto/impianto.component';

import { SezioneComponent } from './sezione/sezione.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpiantoComponent,
    SezioneComponent
  ],
  imports: [
    BrowserModule,
    NgxGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
