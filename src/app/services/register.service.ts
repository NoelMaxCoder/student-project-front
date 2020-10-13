import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterModel } from '../models/registerModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private BaseUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  createUser(user : RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(this.BaseUrl + 'user/create', JSON.stringify(user));
  }
}
