import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { QuestionDto } from './question.dto'; // Ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  private apiUrl = 'http://localhost:5153/api/Quiz/questions';

  constructor(private http: HttpClient) { }

  // Método para obter todas as perguntas
  getQuestions(): Observable<QuestionDto[]> {
    return this.http.get<QuestionDto[]>(this.apiUrl);
  }

  // Método para obter uma pergunta por ID
  getQuestion(id: number): Observable<QuestionDto> {
    return this.http.get<QuestionDto>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar uma pergunta
  updateQuestion(id: number, questionDto: QuestionDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, questionDto);
  }

  // Método para criar uma nova pergunta
  createQuestion(questionDto: QuestionDto): Observable<QuestionDto> {
    return this.http.post<QuestionDto>(this.apiUrl, questionDto);
  }

  // Método para excluir uma pergunta
  deleteQuestion(questionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${questionId}`);
  }

}
