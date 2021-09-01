import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrls: ['./add-autor.component.css']
})
export class AddAutorComponent implements OnInit {


  autor: Autor = {
    nome: '',
    idade: undefined
  };
  submitted = false;


  constructor(private autorService: AutorService ) { }

  ngOnInit(): void {
  }

  saveAutor(): void {
    const data = {
      nome: this.autor.nome,
      idade: this.autor.idade
    };

    this.autorService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAutor(): void {
    this.submitted = false;
    this.autor = {
      nome: '',
      idade: undefined,
    };
  }
}
