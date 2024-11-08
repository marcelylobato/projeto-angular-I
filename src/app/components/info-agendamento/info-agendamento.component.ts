import { Component, Input } from '@angular/core';
import { IDadosInfo } from '../../interfaces/dados-info.interface';

@Component({
  selector: 'app-info-agendamento',
  templateUrl: './info-agendamento.component.html',
  styleUrl: './info-agendamento.component.scss'
})
export class InfoAgendamentoComponent {
  @Input() nomes: IDadosInfo[] = []; 
}