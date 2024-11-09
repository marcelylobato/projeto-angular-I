import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NomeUsuarioService } from '../../services/nome-usuario.service';

@Component({
  selector: 'app-tela-de-login',
  templateUrl: './tela-de-login.component.html',
  styleUrls: ['./tela-de-login.component.scss'],
})
export class TelaDeLoginComponent {
  loginForm: FormGroup;
  nome: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private readonly usuarioService: NomeUsuarioService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.nome = this.usuarioService.definirUsuario(this.nome);
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      console.log('Username:', username);
      console.log('Password:', password);

      this.router.navigate(['/agendamento']);
    } else {
      if (this.loginForm.get('username')?.invalid) {
        alert('O nome de usuário deve ter pelo menos 3 caracteres.');
      }
      if (this.loginForm.get('password')?.invalid) {
        alert('A senha deve ter pelo menos 6 caracteres.');
      }
    }
  }
}
