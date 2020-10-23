import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addClasseModel } from '../models/addClasseModel';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  
  private BaseUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  public getClasses(){
    return this.httpClient.get(this.BaseUrl + "classe/list");
  }

  public createClasse(classe: addClasseModel): Observable<addClasseModel> {
    return this.httpClient.post<addClasseModel>(this.BaseUrl + 'classe/create', JSON.stringify(classe));
  }
}
