import { Component, OnInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
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
    this.contador = 0
  }

  ngOnInit() {
  }

  addAutor(inputAutor: any) {
    if (!this.autores && inputAutor.value) {
      this.autores = []
    }
    if (inputAutor.value) {
      this.autores.push(inputAutor.value)
    }
    inputAutor.value = null
  }

  removerAutorLista(autor: any) {
    
    this.autores.splice(this.autores.indexOf(autor), 1)

    if (!this.autores || !this.autores.length) {
      this.autores = null
    }
  }

  addLivro() {

  }

}
