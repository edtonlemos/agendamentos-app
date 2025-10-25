import { Component } from '@angular/core';
import { Agendamento } from '../models/agendamento';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento-lista',
  templateUrl: './agendamento-lista.component.html',
  styleUrls: ['./agendamento-lista.component.css'],
})
export class AgendamentoListaComponent implements OnInit {
  novoAgendamentoTitulo: string = '';
  // input[type="date"] trabalha com strings no formato yyyy-MM-dd
  novoAgendamentoData: string = new Date().toISOString().slice(0, 10);
  agendamentos: Agendamento[] = [];

  ngOnInit(): void {
    let storedAgendamentos = localStorage.getItem('agendamentos');
    this.agendamentos = storedAgendamentos ? JSON.parse(storedAgendamentos) : [];
  }

  adicionarAgendamento() {
    if ((this.novoAgendamentoTitulo?.trim().length ?? 0) && this.novoAgendamentoData) {
      // converte a string yyyy-MM-dd para Date no horário local (evita deslocamento UTC)
      const [yyyy, mm, dd] = this.novoAgendamentoData.split('-').map(Number);
      const dataLocal = new Date(yyyy, mm - 1, dd);

      const dataBR = this.formataDateBR(dataLocal);
      const novoAgendamento: Agendamento = {
        id: Date.now(),
        titulo: this.novoAgendamentoTitulo.trim(),
        data: dataBR,
      };
      this.agendamentos.push(novoAgendamento);

      alert(
        'Novo apontamento registrado com sucesso!' +
          '\nTítulo: ' +
          this.novoAgendamentoTitulo.trim() +
          '\nData: ' +
          dataBR
      );
      localStorage.setItem('agendamentos', JSON.stringify(this.agendamentos));
      this.limparCamposNovoAgendamento();
    } else {
      alert('Por favor, preencha a descrição do apontamento.');
    }
  }

  removerAgendamento(index: number) {
    this.agendamentos.splice(index, 1);
    localStorage.setItem('agendamentos', JSON.stringify(this.agendamentos));
  }

  private limparCamposNovoAgendamento() {
    this.novoAgendamentoTitulo = '';
    // reseta para hoje no formato yyyy-MM-dd
    this.novoAgendamentoData = new Date().toISOString().slice(0, 10);
  }

   private formataDateBR(d: Date | string): string {
    let date: Date;
    if (typeof d === 'string') {
      // espera string yyyy-mm-dd — converte para Date local sem interpretar como UTC
      const match = d.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (match) {
        const yyyy = Number(match[1]);
        const mm = Number(match[2]);
        const dd = Number(match[3]);
        date = new Date(yyyy, mm - 1, dd);
      } else {
        date = new Date(d);
      }
    } else {
      date = d;
    }

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }
}
