import { OptionDto } from "./option.dto";

export class QuestionDto {
  questionNumber: number;
  questionText: string;
  correctAnswer: string;
  answers: OptionDto[]; // Ajuste para OptionDto se suas opções forem representadas por OptionDto

  constructor(
    questionNumber: number,
    questionText: string,
    correctAnswer: string,
    answers: OptionDto[]
  ) {
    this.questionNumber = questionNumber;
    this.questionText = questionText;
    this.correctAnswer = correctAnswer;
    this.answers = answers;
  }
}
