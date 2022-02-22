import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { JwtToken } from '../models/jwt-token';

const baseUrl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})


export class ServerService implements OnInit{
  
  
  public loggedIn = false;
  private token?: string;
  jwtUri = baseUrl + "/authenticate";
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
  
  login(username:string,password:string){
    return new Promise((resolve,reject) => {
      this.http.post<JwtToken>(this.jwtUri,{
        username:username,
        password:password
      },
      {responseType:'json'}
      ).subscribe(res => {
        localStorage.setItem('token','Bearer ' + res.token)
        this.token = res.token;
        console.log("login",localStorage.getItem('token'))
        resolve("resolvida");
      })
    })
  };
  
  getToken(): string{
    const token = localStorage.getItem('token')
    this.token = token ? token : '';
    return this.token;
  }


  setLocalStorage(token:string){
    token? localStorage.setItem('token',token): ''
  }
}
