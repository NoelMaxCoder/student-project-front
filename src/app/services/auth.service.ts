import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BaseUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  login(login: LoginModel): Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(this.BaseUrl + 'login_check', login);
  }

  logout(){
    return this.httpClient.get(this.BaseUrl + "logout");
  }
}
