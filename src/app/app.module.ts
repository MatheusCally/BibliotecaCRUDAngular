import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAutorComponent } from './components/add-autor/add-autor.component';
import { AutorDetailsComponent } from './components/autor-details/autor-details.component';
import { AutorListComponent } from './components/autor-list/autor-list.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddLivroComponent } from './components/add-livro/add-livro.component';
import { LivroDetailsComponent } from './components/livro-details/livro-details.component';
import { LivrosListComponent } from './components/livros-list/livros-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AddAutorComponent,
    AutorDetailsComponent,
    AutorListComponent,
    AddLivroComponent,
    LivroDetailsComponent,
    LivrosListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
