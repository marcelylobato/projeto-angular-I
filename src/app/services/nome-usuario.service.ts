import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NomeUsuarioService {

  usuario: string = ''

  definirUsuario(usuario: string) {
    this.usuario = usuario
    return this.usuario
  }

  obterUsuario() {
    return this.usuario
  }
  
}
