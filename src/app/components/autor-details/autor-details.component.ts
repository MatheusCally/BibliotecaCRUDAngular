import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/models/autor.model';

@Component({
  selector: 'app-autor-details',
  templateUrl: './autor-details.component.html',
  styleUrls: ['./autor-details.component.css']
})
export class AutorDetailsComponent implements OnInit {

  currentAutor: Autor = {
      nome: '',
      idade: 0
  };
  message = '';


  constructor(
    private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getAutor(this.route.snapshot.params.id);
  }

  getAutor(id: number): void {
    this.autorService.get(id)
      .subscribe(
        data => {
          this.currentAutor = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAutor(): void {
    this.autorService.update(this.currentAutor.id_autor, this.currentAutor)
    .subscribe(
      response => {
        console.log(response);
        this.message = response;
      },
      error => {
        console.log(error);
      });
  }

  deleteAutor(): void {
    this.autorService.delete(this.currentAutor.id_autor)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/autor']);
        },
        error => {
          console.log(error);
        });
  }

}
