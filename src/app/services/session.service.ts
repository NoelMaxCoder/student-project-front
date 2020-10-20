import { Injectable } from '@angular/core';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  addTokenInStorage(token: TokenModel) {
    sessionStorage.setItem('TOKEN', token.token);
  }

  get isLogged(): boolean {
    return sessionStorage.getItem('TOKEN') != null;
  }

  get token(): string {
    return sessionStorage.getItem('TOKEN');
  }

  removeTokenFromStorage(){
    sessionStorage.removeItem('TOKEN');
  }
}
