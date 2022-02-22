import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serverService: ServerService, private router: Router) { }

  ngOnInit(): void {
    this.goToHome();
  }

  submit(f: NgForm){
    if(f.valid){
      this.serverService.login(f.value.username,f.value.password).then(() => {
        this.goToHome();
      });
    }
  }

  goToHome(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/autor']);
    }
  }
}
