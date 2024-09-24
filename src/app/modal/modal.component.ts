import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OptionDto } from '../services/option.dto'; // Ajuste o caminho conforme necessário
import { QuestionDto } from '../services/question.dto';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  selectedOption: OptionDto | null = null; // Armazena a opção selecionada
  correctOption: OptionDto | null = null; // Armazena a opção correta
  correctAnswer: boolean | null = null; // Armazena se a resposta está correta
  letters: string[] = ['A', 'B', 'C', 'D']; // Adicione mais letras se houver mais opções
  


  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:QuestionDto //{ question: QuestionDto}
  ) { }

  
  selectOption(option: OptionDto) {
    this.selectedOption = option; // Armazena a opção selecionada
    this.correctAnswer = option.text === this.data.correctAnswer; // Verifica se está correta
    // Encontra a opção correta
    this.correctOption = this.data.answers.find(answer => answer.text === this.data.correctAnswer) || null;
 // Toca o som apropriado
      if (this.correctAnswer) {
        this.playCorrectAudio();
      } 
      else {
  this.playIncorrectAudio();
}

  }

  onClose(): void {
    this.dialogRef.close(); // Fecha a modal sem retornar dados
  }

  getOptionLetter(index: number): string {
    return String.fromCharCode(65 + index); // 'A' = 65 no código ASCII
  }
  
  // isCorrectAnswer(option: OptionDto): boolean {
  //   if (this.isCorrectAnswer === undefined)
  //     return false;
  //   return option.text === this.data.correctAnswer;

  // }

   // Funções de áudio 
  playCorrectAudio() {
    let audio = new Audio();
    audio.src = 'https://www.myinstants.com/media/sounds/silvio-santos-certa-resposta.mp3'; // Som de resposta correta
    audio.volume = 1.0;
    audio.load();
    audio.play();
  }

  playIncorrectAudio() {
    let audio = new Audio();
    audio.src = 'https://www.myinstants.com/media/sounds/faustao-errou.mp3'; // Som de resposta errada
    audio.volume = 1.0;
    audio.load();
    audio.play();
  }
}



