import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import { Livro } from 'src/app/models/livro.model';
import { AutorService } from 'src/app/services/autor.service';
import { LivroService } from 'src/app/services/livro.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-livro',
  templateUrl: './add-livro.component.html',
  styleUrls: ['./add-livro.component.css'],
  providers: [DatePipe]
})
export class AddLivroComponent implements OnInit {
  currentIdAutor?: Number; 
  livro: Livro = {
    titulo: '',
    lancamento: undefined,
    autor: {
    }
  };
  submitted = false;
  possibleAutores?: Autor[];
  isToday: string | boolean = false;



  constructor(private livroService: LivroService,private autorService: AutorService, private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.retrieveAutores();
  }

  saveLivro(): void {
    var aux;
    console.log(typeof(aux))
    if(this.isToday){
     // this.livro.lancamento = 
     aux = this.datepipe.transform(new Date(), 'dd/MM/yyyy');
    }
    else{
      aux = this.datepipe.transform(this.livro.lancamento, 'dd/MM/yyyy');
    }
    const data = {
      titulo: this.livro.titulo,
      lancamento: aux,
      autor: {
        id_autor: this.currentIdAutor
      }
      
    };
    console.log(typeof(data.lancamento))
    this.livroService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newLivro(): void {
    this.submitted = false;
    this.livro = {
      titulo: '',
      lancamento: undefined,
      autor: {}
    };
  }

  setActiveAutor(n: Number): void {
    this.currentIdAutor = n;
  }

  retrieveAutores(): void{
    this.autorService.getAll()
    .subscribe(
      data => {
        this.possibleAutores = data;
      },
      error => {
        console.log(error);
      });
    }
}
