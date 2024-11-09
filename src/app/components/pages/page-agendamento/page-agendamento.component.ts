import { Component } from '@angular/core';

@Component({
  selector: 'app-page-agendamento',
  templateUrl: './page-agendamento.component.html',
  styleUrl: './page-agendamento.component.scss',
})
export class PageAgendamentoComponent {

  agendamentos = [
    {
      id: 1,
      nome: "Daniel",
      servico: "Corte",
      data: "2024-11-09",
      hora: "17:30",
      profissional: "Marcely",
      preco: "50",
    },
    {
      id: 2,
      nome: "Marcely",
      servico: "Maquiagem",
      data: "2024-11-10",
      hora: "18:00",
      profissional: "Natalia",
      preco: "80",
    },
  ]

  agendamentoCompleto: any

  recebeAgendamentos(agendamento: any) {
    this.agendamentos.push(agendamento)
  }

  recebeId(id: number)  {
    this.agendamentoCompleto = this.agendamentos.find(item => item.id === id)
    return this.agendamentoCompleto
  }
}
