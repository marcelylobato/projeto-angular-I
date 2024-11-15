import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDadosInfo } from '../../interfaces/dados-info.interface';

@Component({
  selector: 'app-info-agendamento',
  templateUrl: './info-agendamento.component.html',
  styleUrl: './info-agendamento.component.scss'
})
export class InfoAgendamentoComponent {
  // @Input() nomes: IDadosInfo[] = []; 
  @Input() nomes: any[] = []; 

  @Output() enviaAgendamento = new EventEmitter()
  @Output() modalOpen = new EventEmitter()
  abrirModal(id: number) {
    this.enviaAgendamento.emit(id)
    this.modalOpen.emit()
  }
}