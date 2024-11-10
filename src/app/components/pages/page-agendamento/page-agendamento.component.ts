import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-agendamento',
  templateUrl: './page-agendamento.component.html',
  styleUrl: './page-agendamento.component.scss',
})
export class PageAgendamentoComponent {

  @ViewChild("modal") modal!: HTMLDialogElement

  agendamentos: any = []

  agendamentoCompleto: any
  nomeDoUsuario: string = ''

  recebeAgendamentos(agendamento: any) {
    this.agendamentos.push(agendamento)
  }

  recebeId(id: number)  {
    this.agendamentoCompleto = this.agendamentos.find((item: any) => item.id === id)
    this.modal.showModal()
    return this.agendamentoCompleto
  }

  recebeNome(nome: string) {
    this.nomeDoUsuario = nome
  }
}
