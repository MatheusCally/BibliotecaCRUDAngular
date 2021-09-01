import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
   baseUrl = environment.baseUrl + '/livro';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseUrl);
  }

  get(id: any): Observable<Livro> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data,{responseType: 'text'});
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data,{responseType: 'text'});
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType: 'text'});
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title: any): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.baseUrl}/find/${title}`);
  }

  findAfter(date: string): Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.baseUrl}/after/${date}`);
  }
  
}
