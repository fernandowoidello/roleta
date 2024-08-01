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

    // Cria um novo objeto Audio
    let audio = new Audio();
    audio.src = 'https://www.myinstants.com/media/sounds/piao-do-bau.mp3';
    audio.volume = 0.5; // Ajuste o volume conforme necessário
    audio.load();
    audio.play();

    this.spinInterval = setInterval(() => {
      this.randomNumber = Math.floor(Math.random() * 500) + 1; // Gera número aleatório entre 1 e 500
    }, 100); // Intervalo de atualização do número

    // Define o comportamento quando o áudio terminar
    audio.addEventListener('ended', () => {
      clearInterval(this.spinInterval);
      this.isSpinning = false;
    });

    setTimeout(() => {
      audio.pause(); // Para o áudio
      audio.currentTime = 0; // Reposiciona o áudio no início
      clearInterval(this.spinInterval);
      this.isSpinning = false;
    }, 10000); // Tempo de rotação em milissegundos (10 segundos)
  }
}
  

  playAudio1() {
    this.audioPlayer1.nativeElement.play();
  }

  playAudio2() {
    this.audioPlayer2.nativeElement.play();
}

playAudio3() {
let audio = new Audio();
audio.src = 'https://www.myinstants.com/media/sounds/pegando-fogo-bicho.mp3';
audio.volume = 0.5;
audio.load();
audio.play();
}

playAudio4() {
  this.audioPlayer4.nativeElement.play();
}

}