import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { studentModel } from '../models/studentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private BaseUrl = environment.API_URL;
  
  constructor(private httpClient: HttpClient) { }

  public createStudent(student: studentModel, id: number): Observable<studentModel> {
    return this.httpClient.post<studentModel>(this.BaseUrl + 'student/create/classe/' + id, JSON.stringify(student));
  }
}
