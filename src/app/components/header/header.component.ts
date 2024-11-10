import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NomeUsuarioService } from '../../services/nome-usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  user: string = '';

  constructor(private readonly userService: NomeUsuarioService) {}

  @Output() usuarioLogado = new EventEmitter<string>()
  ngOnInit(): void {
    this.user = this.userService.obterUsuario();
    this.usuarioLogado.emit(this.user)
  }
}
