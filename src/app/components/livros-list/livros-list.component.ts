import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor.model';
import{ Livro} from 'src/app/models/livro.model';
import{ LivroService} from 'src/app/services/livro.service';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.css']
})
export class LivrosListComponent implements OnInit {
  
  livros?: Livro[];
  currentLivro: Livro = {};
  nome = '';
  possibleAutores?: Autor[];
  currentIndex = -1
  constructor(private livroService: LivroService) { }
  
  ngOnInit(): void {
    this.retrieveLivros();
  }
  
  retrieveLivros(): void {
    this.livroService.getAll()
    .subscribe(
      data => {
        this.livros = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    }
    
    refreshList(): void {
      this.retrieveLivros();
      this.currentLivro = {};
    }
    
    setActiveLivro(livro: Livro, index: number): void {
      this.currentLivro = livro;
      this.currentIndex = index;
    }
    
    
    removeAllLivros(): void {
      this.livroService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
      }
      
      searchTitle(s: string): void {
        if(s == ''){
          this.ngOnInit();
        }
        else{
          this.livroService.findByTitle(s)
          .subscribe(
            data => {
              this.livros = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
          }
        }
        
        resetActiveLivro(){
          this.currentLivro = {}
          this.currentIndex = -1
        }
        
        
        findAfter(date: string): void{
          if(date != ""){
            console.log(date);
            this.livroService.findAfter(date).subscribe(
              data => {
                this.livros = data;
                console.log(data);
              },
              error => {
                console.log(error);
              }
            )
          }
         else{
           this.retrieveLivros();
         }
          
        }
        }
        
        
        
        