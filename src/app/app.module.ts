import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgendamentoListaComponent } from './agendamento-lista/agendamento-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
