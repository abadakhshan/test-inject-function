import { TEST_TOKEN } from './token';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [AppComponent, Component1Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: TEST_TOKEN,
      useValue: 'ROOT',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
