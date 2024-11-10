import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NomeUsuarioService } from '../../services/nome-usuario.service';

@Component({
  selector: 'app-modal-agendamento',
  templateUrl: './modal-agendamento.component.html',
  styleUrl: './modal-agendamento.component.scss'
})
export class ModalAgendamentoComponent {
  nomeUsuario: string = ''
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
  @Input() agendamentoClicado = {
    id: 0,
    nome: this.nomeUsuario,
    servico: "",
    data: "",
    hora: "",
    profissional: "",
    preco: "",
  }
  confirma: boolean = false;
  pagamentoFinalizado: boolean = false
  
  constructor(private readonly usuarioService: NomeUsuarioService) {
    this.nomeUsuario = this.usuarioService.obterUsuario()
  }

  showModal() {
    this.dialog.nativeElement.showModal();
  }

  close() {
    this.dialog.nativeElement.close();
    this.confirma = false
    this.pagamentoFinalizado = false
  }

  confirmaPagamento() {
    this.confirma = true
    setTimeout(() => {
      this.pagamentoFinalizado = true
    }, 3000)
  }

}
