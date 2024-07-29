import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slot-machine',
  templateUrl: './slot-machine.component.html',
  styleUrls: ['./slot-machine.component.css']
})
export class SlotMachineComponent implements OnInit {

  randomNumber: number = 0;
  isSpinning: boolean = false;
  private spinInterval: any;

  @ViewChild('audioPlayer0', { static: true }) audioPlayer0!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioPlayer1', { static: true }) audioPlayer1!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioPlayer2', { static: true }) audioPlayer2!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioPlayer3', { static: true }) audioPlayer3!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioPlayer4', { static: true }) audioPlayer4!: ElementRef<HTMLAudioElement>;




  constructor() { }

  ngOnInit(): void {

    this.audioPlayer0.nativeElement.addEventListener('ended', () => {
      if (this.isSpinning) {
      
   }
  });
}

  spin() {
    
    if (!this.isSpinning) {
      this.isSpinning = true;
      this.audioPlayer0.nativeElement.play(); // Inicia a reprodução do áudio

   this.spinInterval = setInterval(() => {
        this.randomNumber = Math.floor(Math.random() * 500) + 1; // Gera número aleatório entre 1 e 500
      }, 100); // Intervalo de atualização do número

      setTimeout(() => {
        this.audioPlayer0.nativeElement.pause(); // Para o áudio
        this.audioPlayer0.nativeElement.currentTime = 0; // Reposiciona o áudio no início
        clearInterval(this.spinInterval);
        this.isSpinning = false;
      }, 10000); // Tempo de rotação em milissegundos (3 segundos)
    }
  }

  playAudio1() {
    this.audioPlayer1.nativeElement.play();
  }

  playAudio2() {
    this.audioPlayer2.nativeElement.play();
}

playAudio3() {
  this.audioPlayer3.nativeElement.play();
}

playAudio4() {
  this.audioPlayer4.nativeElement.play();
}

}