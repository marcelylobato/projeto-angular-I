
import { Component, Input } from '@angular/core';
import { DadosInfo } from '../../Interface/DadosInfo.interface';

import { Component } from '@angular/core';


@Component({
  selector: 'app-info-agendamento',
  templateUrl: './info-agendamento.component.html',
  styleUrl: './info-agendamento.component.scss'
})
export class InfoAgendamentoComponent {

}


  @Input() nomes: DadosInfo[] = []; 
}



