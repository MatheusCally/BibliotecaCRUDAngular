import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/models/livro.model';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-details',
  templateUrl: './livro-details.component.html',
  styleUrls: ['./livro-details.component.css']
})
export class LivroDetailsComponent implements OnInit {

  currentLivro: Livro = {
    titulo: '',
    lancamento: undefined
  };
  message = '';

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getLivro(this.route.snapshot.params.id);
  }

  getLivro(id: string): void {
    this.livroService.get(id)
      .subscribe(
        data => {
          this.currentLivro = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateLivro(): void {
    this.message = '';

    this.livroService.update(this.currentLivro.id_livro, this.currentLivro)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This livro was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteLivro(): void {
    this.livroService.delete(this.currentLivro.id_livro)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/livro']);
        },
        error => {
          console.log(error);
        });
  }
}
