import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-btn-inputs-form',
  templateUrl: './btn-inputs-form.component.html',
  styleUrl: './btn-inputs-form.component.scss'
})
export class BtnInputsFormComponent {
  form: FormGroup;
  agendamento = {
    id: Math.round(Math.random() * 100000),
    servico: "",
    data: "",
    hora: "",
    profissional: "",
  }

  hoje = new Date();
  dia = String(this.hoje.getDate()).padStart(2, '0');
  mes = String(this.hoje.getMonth() + 1).padStart(2, '0');
  ano = this.hoje.getFullYear();
  dataHoje = `${this.ano}-${this.mes}-${this.dia}`;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      service: ['corte', Validators.required],
      date: ['', Validators.required],
      hour: ['', Validators.required],
      professional: ['marcely', Validators.required],
    });
  }

  @Output() enviaInfosAgendamento = new EventEmitter<any>();

  onSubmit(): void {
    if (this.form.valid) {
      this.enviaInfosAgendamento.emit(this.agendamento)
      console.log(this.agendamento);
      
      this.agendamento = {
        id: Math.round(Math.random() * 100000),
        servico: "",
        data: "",
        hora: "",
        profissional: "",
      }
      const formData = this.form.value;
      localStorage.setItem('formData', JSON.stringify(formData));
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
