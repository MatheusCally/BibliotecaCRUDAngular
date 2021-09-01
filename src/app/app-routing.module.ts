import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorListComponent } from './components/autor-list/autor-list.component';
import { AutorDetailsComponent } from './components/autor-details/autor-details.component';
import { AddAutorComponent } from './components/add-autor/add-autor.component';
import { LivrosListComponent } from './components/livros-list/livros-list.component';
import { LivroDetailsComponent } from './components/livro-details/livro-details.component';
import { AddLivroComponent } from './components/add-livro/add-livro.component';
const routes: Routes = [
  { path: '', redirectTo: 'autor', pathMatch: 'full' },
  { path: 'autor', component: AutorListComponent },
  { path: 'autor/:id', component:AutorDetailsComponent },
  { path: 'add', component: AddAutorComponent },
  { path: 'livro', component:LivrosListComponent},
  { path: 'livro/:id', component:LivroDetailsComponent},
  { path: 'addLivro', component:AddLivroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
