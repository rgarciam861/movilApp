import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelefonoComponent } from './components/telefono/telefono.component';
import { TelefonodetailComponent } from './components/telefonodetail/telefonodetail.component';

@NgModule({
  declarations: [
    AppComponent,
    TelefonoComponent,
    TelefonodetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
