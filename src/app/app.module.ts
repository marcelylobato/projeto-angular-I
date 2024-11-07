import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalAgendamentoComponent } from './components/modal-agendamento/modal-agendamento.component';
import { BtnConfirmaPagamentoComponent } from './components/btn-confirma-pagamento/btn-confirma-pagamento.component';
import { InfoAgendamentoComponent } from './components/info-agendamento/info-agendamento.component';
import { TelaDeLoginComponent } from './components/tela-de-login/tela-de-login.component';
import { BtnInputsFormComponent } from './components/btn-inputs-form/btn-inputs-form.component'
import { PageAgendamentoComponent } from './components/pages/page-agendamento/page-agendamento.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalAgendamentoComponent,
    BtnConfirmaPagamentoComponent,
    InfoAgendamentoComponent,
    TelaDeLoginComponent,
    BtnInputsFormComponent,
    PageAgendamentoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
