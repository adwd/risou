import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
import { DomainModule } from './domain/domain.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentModule,
    DomainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
