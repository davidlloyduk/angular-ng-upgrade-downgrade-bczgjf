import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AjsModule } from '../../angularjs'

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, AjsModule ],
  declarations: [ AppComponent ],
  providers:    [],
  entryComponents: [AppComponent]
})
export class AppModule {
  ngDoBootstrap() {}
}