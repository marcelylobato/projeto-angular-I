import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-agendamento',
  templateUrl: './modal-agendamento.component.html',
  styleUrl: './modal-agendamento.component.scss'
})
export class ModalAgendamentoComponent {


  @Input() agendamentoClicado = {
    id: 0,
    nome: "",
    servico: "",
    data: "",
    hora: "",
    profissional: "",
    preco: "",
  }
}
