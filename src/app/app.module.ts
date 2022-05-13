import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Session1Component } from './session1/session1.component';
import { InicappipePipe } from './pipes/inicappipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Session1Component,
    InicappipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
