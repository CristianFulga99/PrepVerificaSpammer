import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FraseComponent } from './frase/frase.component';

@NgModule({
  declarations: [
    AppComponent,
    FraseComponent
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
