import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor.model';
import { environment } from '../../environments/environment';
import { Livro } from '../models/livro.model';


@Injectable({
  providedIn: 'root'
})
export class AutorService {
  uri = environment.baseUrl + "/autor";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.uri);
  }

  get(id: any): Observable<Autor> {
    return this.http.get(`${this.uri}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.uri, data,{responseType: 'text'});
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.uri}/${id}`, data,{responseType: 'text'});
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.uri}/${id}`,{responseType: 'text'});
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.uri);
  }

  findByNome(nome: any): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${this.uri}/find/${nome}`);
  }

  getLivros(id: any): Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.uri}/${id}/livros/`);
  }
}
