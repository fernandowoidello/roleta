import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; // Importando o módulo de botões do Angular Material

import { AppComponent } from './app.component';
import { SlotMachineComponent } from './slot-machine/slot-machine.component'; // Ajuste o caminho conforme necessário
import { HttpClientModule } from '@angular/common/http'; // httclient api


@NgModule({
  declarations: [
    AppComponent,
    SlotMachineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, // Adicionando MatButtonModule aos imports
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
