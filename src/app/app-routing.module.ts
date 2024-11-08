import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaDeLoginComponent } from './components/tela-de-login/tela-de-login.component';
import { PageAgendamentoComponent } from './components/pages/page-agendamento/page-agendamento.component';

const routes: Routes = [
  {path: "", component: TelaDeLoginComponent},
  {path: "agendamento", component: PageAgendamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
