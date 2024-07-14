// slot-machine.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot-machine',
  templateUrl: './slot-machine.component.html',
  styleUrls: ['./slot-machine.component.css']
})
export class SlotMachineComponent implements OnInit {

  randomNumber: number = 0;
  isSpinning: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  spin() {
    if (!this.isSpinning) {
      this.isSpinning = true;
      const spinInterval = setInterval(() => {
        this.randomNumber = Math.floor(Math.random() * 500) + 1; // Gera número aleatório entre 1 e 500
      }, 100); // Intervalo de atualização do número

      setTimeout(() => {
        clearInterval(spinInterval);
        this.isSpinning = false;
      }, 3000); // Tempo de rotação em milissegundos (3 segundos)
    }
  }

}
