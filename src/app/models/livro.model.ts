import { Autor } from "./autor.model";

export class Livro {
    id_livro?:number;
    titulo?:string;
    lancamento?:Date;
    autor?:Autor;
}
