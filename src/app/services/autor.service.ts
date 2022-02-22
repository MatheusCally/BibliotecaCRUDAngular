import { DoCheck, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor.model';
import { environment } from '../../environments/environment';
import { Livro } from '../models/livro.model';
import { JwtToken } from '../models/jwt-token';
import { ServerService } from './server.service';


@Injectable({
  providedIn: 'root'
})
export class AutorService implements OnInit {
  // token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXRoZXVzIiwiZXhwIjoxNjQ1NTAwMzg3LCJpYXQiOjE2NDU0ODIzODd9.-kllfSFaSBjwzY3Xbwsoe-anoAWve6DzUPAUXyT4Nyy6J9caH3HCtLySoEmYWQqnIEuY1p1gQktXpYk1mseJ0w';
  public token: string | null = localStorage.getItem("token") || null;
  uri = environment.baseUrl + "/autor";
  constructor(private http: HttpClient, private serverService: ServerService) { }
  
  ngOnInit(): void {
  }

  headers = new HttpHeaders();
  

  getAll(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.uri, { headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.serverService.getToken()
    }});
  }
  
  get(id: any): Observable<Autor> {
    return this.http.get(`${this.uri}/${id}`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': this.serverService.getToken()
      }
    });
  }
  
  create(data: any): Observable<any> {
    return this.http.post(this.uri, data,{responseType: 'text',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.serverService.getToken()
    }});
  }
  
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.uri}/${id}`, data,{responseType: 'text',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.serverService.getToken()
    }});
  }
  
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.uri}/${id}`,{responseType: 'text',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': this.serverService.getToken()
    }});
  }
  
  deleteAll(): Observable<any> {
    return this.http.delete(this.uri,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': this.serverService.getToken()
      }
    });
  }
  
  findByNome(nome: any): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${this.uri}/find/${nome}`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': this.serverService.getToken()
      }
    });
  }
  
  getLivros(id: any): Observable<Livro[]>{
    return this.http.get<Livro[]>(`${this.uri}/${id}/livros/`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': this.serverService.getToken()
      }
    });
  }
}
