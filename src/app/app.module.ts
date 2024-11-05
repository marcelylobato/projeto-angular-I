import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalAgendamentoComponent } from './components/modal-agendamento/modal-agendamento.component';
import { BtnConfirmaPagamentoComponent } from './components/btn-confirma-pagamento/btn-confirma-pagamento.component';
import { InfoAgendamentoComponent } from './components/info-agendamento/info-agendamento.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalAgendamentoComponent,
    BtnConfirmaPagamentoComponent,
    InfoAgendamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
