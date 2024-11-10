import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalAgendamentoComponent } from './components/modal-agendamento/modal-agendamento.component';
import { BtnConfirmaPagamentoComponent } from './components/btn-confirma-pagamento/btn-confirma-pagamento.component';
import { InfoAgendamentoComponent } from './components/info-agendamento/info-agendamento.component';
import { TelaDeLoginComponent } from './components/tela-de-login/tela-de-login.component';
import { BtnInputsFormComponent } from './components/btn-inputs-form/btn-inputs-form.component'
import { PageAgendamentoComponent } from './components/pages/page-agendamento/page-agendamento.component';
import { HeaderComponent } from './components/header/header.component';

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from '@angular/common';
import { PrecoPipe } from './pipes/preco.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


registerLocaleData(localePt, "pt-BR")
@NgModule({
  declarations: [
    AppComponent,
    ModalAgendamentoComponent,
    BtnConfirmaPagamentoComponent,
    InfoAgendamentoComponent,
    TelaDeLoginComponent,
    BtnInputsFormComponent,
    PageAgendamentoComponent,
    HeaderComponent,
    PrecoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule 
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'pt-BR'},
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
