import { Component } from '@angular/core';
import { Agendamento } from '../models/agendamento';

@Component({
  selector: 'app-agendamento-lista',
  templateUrl: './agendamento-lista.component.html',
  styleUrls: ['./agendamento-lista.component.css']
})
export class AgendamentoListaComponent {
  agendamento: Agendamento = {
    id: 1,
    titulo: 'Consulta médica',
    data: new Date('03/10/2025')
  };
}
