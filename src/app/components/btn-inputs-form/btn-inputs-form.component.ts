import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-btn-inputs-form',
  templateUrl: './btn-inputs-form.component.html',
  styleUrl: './btn-inputs-form.component.scss'
})
export class BtnInputsFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      service: ['corte', Validators.required],
      date: ['', Validators.required],
      hour: ['', Validators.required],
      professional: ['marcely', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      localStorage.setItem('formData', JSON.stringify(formData));
      alert('Dados enviados com sucesso!');
      this.form.reset();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
