import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import { Livro } from 'src/app/models/livro.model';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent implements OnInit {

  autores?: Autor[];
  currentAutor: Autor = {
  };
  nome? = '';
  keys?: String[];
  currentAutorLivros?: Livro[];
  constructor(private autorService: AutorService) { }
  currentIndex = -1
  ngOnInit(): void {
    this.retrieveAutores();
  }
  page = 1;


  
  retrieveAutores(): void {
    this.autorService.getAll()
    .subscribe(
      data => {
        this.autores = data;
        console.log(data);
      },error => {
        console.log(error)
      }
    );
  }

  refreshList(): void{
    this.retrieveAutores();
    this.currentAutor = {};
  }

  setActiveAutor(autor: Autor, index:number): void {
    this.currentAutor = autor;
    this.setActiveLivros(autor);
    this.currentIndex = index
  }

  setActiveLivros(autor: Autor): void{
    this.autorService.getLivros(autor.id_autor).
    subscribe(
      data =>{
      this.currentAutorLivros = data;
      return 
      },
      error =>{
        console.log(error)
      }
    );
    
  }

  removeAllAutores(): void {
    this.autorService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNome(n: string): void {
    if(n == ''){
      this.ngOnInit();
    }
    else{
    this.autorService.findByNome(n)
      .subscribe(
        data => {
          this.autores = data;
          console.log(data);
          console.log(Object.keys(data[0]));
        },
        error => {
          console.log(error);
        });
      }
  }

  resetActiveAutor(){
    this.currentAutor = {}
    this.currentIndex = -1;
  }
  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }


  handlePageChange(event: any) {
    this.page = event;
  }
}
