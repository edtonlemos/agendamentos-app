import { Component } from '@angular/core';
import { Agendamento } from '../models/agendamento';

@Component({
  selector: 'app-agendamento-lista',
  templateUrl: './agendamento-lista.component.html',
  styleUrls: ['./agendamento-lista.component.css'],
})
export class AgendamentoListaComponent {
  novoAgendamentoTitulo: string = '';
  novoAgendamentoData: Date = new Date();
  agendamentos: Agendamento[] = [];

  adicionarAgendamento() {
    if (this.novoAgendamentoTitulo.trim().length && this.novoAgendamentoData) {
      let novoAgendamento: Agendamento = {
        id: Date.now(),
        titulo: this.novoAgendamentoTitulo,
        data: this.novoAgendamentoData,
      };
      this.agendamentos.push(novoAgendamento);

      alert(
        'Novo apontamento registrado com sucesso!' +
          '\nTítulo: ' +
          this.novoAgendamentoTitulo +
          '\nData: ' +
          this.novoAgendamentoData
      );

      this.limparCamposNovoAgendamento();
    } else {
      alert('Por favor, preencha a descrição do apontamento.');
    }
  }

  removerAgendamento(index: number) {
    this.agendamentos.splice(index, 1);
  }

  private limparCamposNovoAgendamento() {
    this.novoAgendamentoTitulo = '';
    this.novoAgendamentoData = new Date();
  }
}
