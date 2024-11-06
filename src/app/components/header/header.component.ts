import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Corrigido para ser um array
})
export class HeaderComponent {
  
  logout() {
    console.log('Usuário deslogado');
  }
  
  username: string = 'NomeDoUsuario';
}
