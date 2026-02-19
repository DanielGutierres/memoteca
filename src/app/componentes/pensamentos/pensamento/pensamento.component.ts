import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento.interface';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  constructor(private service: PensamentoService) { }

      @Input() pensamento: Pensamento = {
        id : 0,
        conteudo: '',
        autoria: '',
        modelo: '',
        favorito: false
    }

    @Input() listaFavoritos: Pensamento[] = [];

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
      return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito == false) {
      return 'inativo';
    }
    return 'ativo';
  }

  atualizarFavorito(): void {
    this.service.mudarFavorito(this.pensamento).subscribe((pensamentoAtualizado) => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(pensamentoAtualizado), 1);
    });
  }
}
