import { Component, OnInit } from '@angular/core';
import { Livro } from './livro.model';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livro: Livro
  autores: Array<String>
  contador: number

  constructor() { 
    this.autores  = []
    this.contador = 0
  }

  ngOnInit() {
  }

  addAutor(autor: string) {
    if (autor) {
      this.autores.push(autor)
      this.contador++
    }
  }

}
