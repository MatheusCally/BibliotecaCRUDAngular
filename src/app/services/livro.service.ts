import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro.model';
import { environment } from '../../environments/environment';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
   baseUrl = environment.baseUrl + '/livro';
  constructor(private http: HttpClient,private serverService: ServerService) { }

  getAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseUrl,{ headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.serverService.getToken()
    }});
  }

  get(id: any): Observable<Livro> {
    return this.http.get(`${this.baseUrl}/${id}`,{ headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.serverService.getToken()
    }});
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data,{ headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.serverService.getToken()
    }});
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data,{responseType: 'text',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.serverService.getToken()
    }
  });
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType: 'text',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.serverService.getToken()
    }});
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl,
      { headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': this.serverService.getToken()
      }});
  }

  findByTitle(title: any): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.baseUrl}/find/${title}`,
    { headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.serverService.getToken()
    }});
  }

  findAfter(date: string): Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.baseUrl}/after/${date}`,
    { headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.serverService.getToken()
    }});
  }
  
}
