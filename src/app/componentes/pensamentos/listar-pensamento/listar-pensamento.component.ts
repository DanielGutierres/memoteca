import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    { conteudo: 'Aprendendo Angular', autoria: 'Maria', modelo: 'modelo1' },
    { conteudo: 'TypeScript é incrível', autoria: 'João', modelo: 'modelo2' },
    { conteudo: 'Componentes são reutilizáveis', autoria: 'Ana', modelo: 'modelo3' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
