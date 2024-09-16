export class OptionDto {
    text: string = '';
    isCorrect: boolean = false;
  
    constructor(text: string = '', isCorrect: boolean = false) {
      this.text = text;
      this.isCorrect = isCorrect;
    }
  }
  
  export class QuestionDto {
    questionNumber: number = 0;
    questionText: string = '';
    correctAnswer: string = '';
    answers: OptionDto[] = []; // Inicializa com uma lista vazia
  
    constructor(
      questionNumber: number = 0,
      questionText: string = '',
      correctAnswer: string = '',
      answers: OptionDto[] = []
    ) {
      this.questionNumber = questionNumber;
      this.questionText = questionText;
      this.correctAnswer = correctAnswer;
      this.answers = answers;
    }
  }
  