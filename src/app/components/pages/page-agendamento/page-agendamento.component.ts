import { Component } from '@angular/core';

@Component({
  selector: 'app-page-agendamento',
  templateUrl: './page-agendamento.component.html',
  styleUrl: './page-agendamento.component.scss'
})
export class PageAgendamentoComponent {
  nomes = [
    { id: 1, nome: 'Julia', data: '11/11/2024', servico: 'Corte de Cabelo', horario: '14:00', valor: 70},
    { id: 2, nome: 'Maria ', data: '11/11/2024', servico: 'Escova', horario: '15:00', valor: 80 },
    { id: 3, nome: 'Cleide', data: '12/11/2024', servico: 'Tintura', horario: '16:00', valor: 120 },
  ]
}
