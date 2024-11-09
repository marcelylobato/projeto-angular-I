import { Component, OnInit } from '@angular/core';
import { NomeUsuarioService } from '../../services/nome-usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  user: string = '';

  constructor(private readonly userService: NomeUsuarioService) {}

  ngOnInit(): void {
    this.user = this.userService.obterUsuario();
  }
}
