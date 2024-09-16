import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { QuestionServiceService } from '../services/question-service.service';
import { QuestionDto } from '../services/question.dto'; // Ajuste o caminho conforme necessário
import { OptionDto } from '../services/option.dto';



@Component({
  selector: 'app-slot-machine',
  templateUrl: './slot-machine.component.html',
  styleUrls: ['./slot-machine.component.css']
})
export class SlotMachineComponent implements OnInit {

  randomNumber: number = 0;
  isSpinning: boolean = false;
  questions: QuestionDto[] = [];
  selectedQuestion: QuestionDto | null = null; //Armazena a pergunta selecionada
  selectedOption: any = null; // Armazena a opção selecionada
  correctAnswer: boolean | null = null; // Armazena se a resposta está correta
  private spinInterval: any;

  @ViewChild('audioPlayer1', { static: true }) audioPlayer1!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioPlayer2', { static: true }) audioPlayer2!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioPlayer3', { static: true }) audioPlayer3!: ElementRef<HTMLAudioElement>;
  @ViewChild('audioPlayer4', { static: true }) audioPlayer4!: ElementRef<HTMLAudioElement>;

  constructor(private questionServiceService: QuestionServiceService) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.questionServiceService.getQuestions().subscribe(data => {
      
      this.questions = data.map(q => {
        // Converta os dados recebidos para a estrutura de DTOs
        const options = q.answers.map(a => new OptionDto(a.text, a.text === q.correctAnswer)); // Ajuste a criação de OptionDto
        return new QuestionDto(q.questionNumber, q.questionText, q.correctAnswer, options);
      });
      console.log('Perguntas carregadas:', this.questions);
    });
  }


  spin() {
    
    if (!this.isSpinning) {
      this.isSpinning = true;

        // Reinicia o valor do número
        this.randomNumber = 0;

      // Tocar o som da roleta
      let audio = new Audio();
      audio.src = 'https://www.myinstants.com/media/sounds/perguntashowdomilhao.mp3';
      audio.volume = 0.5; // Ajuste o volume conforme necessário
      audio.load();
      audio.play();

       // Inicia o intervalo para gerar números aleatórios até o áudio terminar
       this.spinInterval = setInterval(() => {
        this.randomNumber = Math.floor(Math.random() * this.questions.length); // Gera número aleatório baseado na quantidade de perguntas
      }, 100); // A cada 100ms um novo número aparece (simula o giro rápido)

      audio.addEventListener('ended', () => {
        clearInterval(this.spinInterval);
        this.isSpinning = false;
        this.selectedQuestion = this.questions[this.randomNumber]; // Seleciona a pergunta baseada no número sorteado
        this.correctAnswer = null; // Reinicia a verificação de resposta
      });

      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        clearInterval(this.spinInterval);
        this.isSpinning = false;
        this.selectedQuestion = this.questions[this.randomNumber]; // Seleciona a pergunta baseada no número sorteado
        this.correctAnswer = null; // Reinicia a verificação de resposta
      }, 2000);
    }
  }

  selectOption(option: any) {
    this.selectedOption = option;
    this.correctAnswer = option.isCorrect; // Verifica se a opção é correta
    if (this.correctAnswer) {
      this.playAudio4(); // Som de resposta correta
    } else {
      this.playAudio1(); // Som de resposta errada
    }
  }

  playAudio1() {
    let audio = new Audio();
    audio.src = 'https://www.myinstants.com/media/sounds/faustao-errou.mp3';
    audio.volume = 1.0;
    audio.load();
    audio.play();
  }

  playAudio2() {
    let audio = new Audio();
    audio.src = 'https://www.myinstants.com/media/sounds/errou-show-do-milhao.mp3';
    audio.volume = 1.0;
    audio.load();
    audio.play();
  }

  playAudio3() {
    let audio = new Audio();
    audio.src = 'https://www.myinstants.com/media/sounds/pegando-fogo-bicho.mp3';
    audio.volume = 0.5;
    audio.load();
    audio.play();
  }

  playAudio4() {
    let audio = new Audio();
    audio.src = 'https://www.myinstants.com/media/sounds/silvio-santos-certa-resposta.mp3';
    audio.volume = 1.0;
    audio.load();
    audio.play();   
  }
}
