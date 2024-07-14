import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importe o AppRoutingModule

import { AppComponent } from './app.component';
import { SlotMachineComponent } from './slot-machine/slot-machine.component'; // ajuste o caminho conforme necessário

@NgModule({
  declarations: [
    AppComponent,
    SlotMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Importe o AppRoutingModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
