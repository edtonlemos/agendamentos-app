import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgendamentoListaComponent } from './agendamento-lista/agendamento-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
